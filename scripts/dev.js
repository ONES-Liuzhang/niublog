const webpackConfig = require('../webpack.config')
const webpack = require('webpack')
// https://github.com/webpack/memory-fs 可以读取内存
const MemoryFileSystem = require('memory-fs')
const path = require('path')

const compiler = webpack(webpackConfig)
const Koa = require('koa')
const app = new Koa()

const mfs = new MemoryFileSystem()
const outputPath = webpackConfig.output.path
// 指定输出的文件系统为内存
compiler.outputFileSystem = mfs

let bundle
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
  bundle = JSON.parse(mfs.readFileSync(bundlePath,'utf-8'))
  console.log('bundle generate complate!')
})

app.use(async (ctx) => {
  const { url } = ctx.req

  if(url === '/ssr.menifest.js') {
    if(!bundle) {
      ctx.body = '正在编译中...'
    } else {
      console.log('bundle 被拉取！')
      ctx.header['content-type'] = 'application/json'
      ctx.body = bundle
    }
  } else if(url !== '/') {
    ctx.body = mfs.readFileSync(path.join(outputPath, `.${url}`), 'utf-8')
  }
})

app.listen(8888, () => {
  console.log('webpack Server listening on 8888')
})