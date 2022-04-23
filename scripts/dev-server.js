const webpackConfig = require('../webpack.config')
const webpack = require('webpack')
// https://github.com/webpack/memory-fs 可以读取内存
const MemoryFileSystem = require('memory-fs')
const path = require('path')
const { loadModule } = require('./utils')

const compiler = webpack(webpackConfig)
const mfs = new MemoryFileSystem()
const outputPath = webpackConfig.output.path
// 指定输出的文件系统为内存
compiler.outputFileSystem = mfs

let appSourceCode
/**
 * @type {import('webpack').Watching}
 */
compiler.watch({}, (err, stats) => {
  if(err) {
    throw err
  }

  const statsJson = stats.toJson();
  statsJson.errors.forEach((err) => console.log('error: ', err))
  statsJson.warnings.forEach((err) => console.log('warning: ', err))

  const bundlePath = path.join(outputPath, 'ssr-manifest.json')
  const bundle = JSON.parse(mfs.readFileSync(bundlePath,'utf-8'))
  appSourceCode = mfs.readFileSync(path.join(outputPath, bundle['app.js']), 'utf-8')
  console.log('bundle generate complate!')
})

const Koa = require('koa')
const app = new Koa()
const { renderToString } = require('@vue/server-renderer')
const axios = require('axios').create({
  baseURL: 'http://localhost:8887/'
})

// icon
app.use(async (ctx, next) => {
  const { url } = ctx.req
  console.log(`server 请求:`, url)

  if(url === '/assets/favicon.ico') {
    const { headers, data } = await axios.get('/assets/favicon.ico', {
      responseType: 'stream'
    })

    data.pipe(mfs.createReadStream('favicon.ico'))
    const buffer = mfs.readFileSync('favicon.ico')
    ctx.type = headers['Content-Type']
    ctx.body = buffer
  } else {
    await next()
  }
})

app.use(async (ctx) => {
  if(!appSourceCode) {
    ctx.body='文件还在编译中！'
  } else {
    // 获取server端入口app，并通过执行获取其内部导出
    const createApp = loadModule(appSourceCode).default
    const { app, router } = createApp()
    const { url } = ctx.req
    
    if (router.hasRoute(url)) {
      await router.push(url)
    } else {
      // TODO 这里没法跳404是为什么
      await router.push('s')
    }

    await router.isReady()
    const appContent = await renderToString(app)
    const html = await axios.get('/index.html').then(res => res.data)

    ctx.set('Content-Type', 'text/html; charset=utf-8;')
    ctx.body = html.replace('<div id="app">', `<div id="app">${appContent}`)
  }
})

app.listen(8886, () => {
  console.log('webpack Server listening on 8886')
})