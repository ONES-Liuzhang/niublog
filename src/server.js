const Koa = require('koa')
const app = new Koa()
const manifest = require('./dist/server/ssr-manifest.json')
const path = require('path')
const fs = require('fs')
// const serve = require('koa-static')
const appPath = path.resolve(__dirname, './dist/server', manifest['app.js'])
const createApp = require(appPath).default
const { renderToString } = require('@vue/server-renderer')

app.use(async (ctx) => {

  const { app } = createApp()
  const appContent = await renderToString(app)

  const html = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')

  ctx.header['content-type'] = 'text/html'
  ctx.body = html.replace('<div id="app">', `<div id="app">${appContent}`)
})

app.on('error', (err) => {
  console.log('server error ', err)
})

app.listen(3333)