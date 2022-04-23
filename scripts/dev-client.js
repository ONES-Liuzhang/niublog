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

const { CONTENT_TYPE_MAP } = require('./utils')

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

// 图片资源等文件读取
app.use(async (ctx, next) => {
  const url = ctx.req.url
  console.log(`client 请求:`, url)
  const ext = path.extname(url)

  if(~['.png', '.ico', '.jpg', '.gif'].indexOf(ext)) {
    const sourcePath = path.resolve(outputPath, `.${url}`)
    const binaryContent = mfs.readFileSync(sourcePath)

    ctx.set('Content-Type', `${CONTENT_TYPE_MAP[ext]}`)
    ctx.body = binaryContent
  } else {
    await next()
  }
})

app.use(async (ctx) => {
  const url = ctx.req.url
  try {
    const sourcePath = path.resolve(outputPath, `.${url}`)
    const fileContent = mfs.readFileSync(sourcePath, 'utf-8')
    
    ctx.set('Content-Type', `${CONTENT_TYPE_MAP[path.extname(sourcePath)] || 'text/plain'}`)
    ctx.body = fileContent
  } catch (err) {
    console.log('error ', ctx.req.url, err)
    ctx.body = 'ERROR'
  }
})

app.listen(8887, () => {
  console.log('webpack Client Server listening on 8887')
})