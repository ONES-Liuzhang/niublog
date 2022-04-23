const webpack = require("webpack");
const createWebpackConfig = require("./config");
const MemoryFileSystem = require("memory-fs");
const Koa = require("koa");
const path = require("path");

const mfs = new MemoryFileSystem();

/** 客户端 */
const clientWebpackConfig = createWebpackConfig(false, true);
const clientOutputPath = clientWebpackConfig.output.path;
const clientCompiler = webpack(clientWebpackConfig);
clientCompiler.outputFileSystem = mfs;
clientCompiler.watch({}, (err, stats) => {
  if (err) throw err;
  const statsJson = stats.toJson();
  statsJson.errors.forEach((err) => console.log("client error: ", err));
  statsJson.warnings.forEach((err) => console.log("client warning: ", err));

  console.log("client bundle generate complate!");
});

/** 服务端 */
const ssrWebpackConfig = createWebpackConfig(true, true);
const ssrOutputPath = ssrWebpackConfig.output.path;
const ssrCompiler = webpack(ssrWebpackConfig);
ssrCompiler.outputFileSystem = mfs;
console.log(
  `ssr output path is ${ssrOutputPath}, client output path is ${clientOutputPath}`
);

let appSourceCode;
ssrCompiler.watch({}, (err, stats) => {
  if (err) throw err;
  const statsJson = stats.toJson();
  statsJson.errors.forEach((err) => console.log("server error: ", err));
  statsJson.warnings.forEach((err) => console.log("server warning: ", err));

  const bundlePath = path.join(ssrOutputPath, "ssr-manifest.json");
  const bundle = JSON.parse(mfs.readFileSync(bundlePath, "utf-8"));
  appSourceCode = mfs.readFileSync(path.join(ssrOutputPath, bundle["app.js"]));
  console.log("server bundle generate complate!");
});

const app = new Koa();
const { renderToString } = require("@vue/server-renderer");
const { loadModule, CONTENT_TYPE_MAP } = require("./utils");

/** terminal logger */
app.use(async (ctx, next) => {
  const { url } = ctx.req
  ctx.req.url = decodeURIComponent(url);
  console.log(`server url:`, ctx.req.url);

  await next();
});

app.use(async (ctx, next) => {
  // 获取 assets 下的资源文件
  const url = ctx.req.url;
  if (/\/assets\/[\w\d]+\.\w+$/.test(url)) {
    ctx.set("Content-Type", CONTENT_TYPE_MAP[path.extname(url)]);
    const filePath = path.join(clientOutputPath, `.${url}`);
    const binaryContent = mfs.readFileSync(filePath);
    ctx.body = binaryContent;
  } else {
    await next();
  }
});

// 拦截 __CLIENT__ 请求
app.use(async (ctx, next) => {
  let { url } = ctx.req;

  const idx = url.indexOf("/__CLIENT__");
  if (~idx) {
    const ext = path.extname(url);
    url = url.replace("/__CLIENT__", "");

    const filePath = path.join(clientOutputPath, `.${url}`);
    ctx.set("Content-Type", CONTENT_TYPE_MAP[ext]);

    // 二进制文件
    if (~[".png", ".jpg", ".gif", ".ico"].indexOf(ext)) {
      const binaryContent = mfs.readFileSync(filePath);
      ctx.body = binaryContent;
    } else {
      const fileContent = mfs.readFileSync(filePath, "utf-8");
      ctx.body = fileContent;
    }
  } else {
    await next();
  }
});

app.use(async (ctx) => {
  const { url } = ctx.req;
  const appPath = path.join(clientOutputPath, "index.html");

  if (!appSourceCode || !mfs.existsSync(appPath)) {
    ctx.body = "文件正在编译中...";
  } else {
    const createApp = loadModule(appSourceCode).default;
    const { app, router } = createApp();

    if (router.hasRoute(url)) {
      await router.push(url);
    }

    await router.isReady();
    const templ = mfs.readFileSync(appPath, "utf-8");
    const html = await renderToString(app);
    ctx.set("Content-Type", "text/html;charset:utf-8;");
    ctx.body = templ.replace(`<div id="app">`, `<div id="app">${html}`);
  }
});

app.listen(8886, () => {
  console.log("webpack Server listening on 8886");
});
