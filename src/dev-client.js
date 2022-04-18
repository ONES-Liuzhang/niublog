const webpackConfig = require('../webpack.config')
const webpack = require('webpack')
// https://github.com/webpack/memory-fs 可以读取内存
const MemoryFileSystem = require('memory-fs')
const path = require('path')

const compiler = webpack(webpackConfig)
const mfs = new MemoryFileSystem()
const outputPath = webpackConfig.output.path
// 指定输出的文件系统为内存
compiler.outputFileSystem = mfs

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

  console.log('bundle generate complate!')
})

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  const url = ctx.req.url
  try {
    console.log(path.resolve(outputPath, `.${url}`))
    const fileContent = mfs.readFileSync(path.resolve(outputPath, `.${url}`))
    ctx.body = fileContent
  } catch (err) {
    console.log('error ', ctx.req.url)
    ctx.body = 'ERROR'
  }
})

app.listen(8887, () => {
  console.log('webpack Client Server listening on 8887')
})