const Koa = require('koa')
const app = new Koa()
const manifest = require('./dist/server/ssr-manifest.json')
const path = require('path')
const fs = require('fs')
const static = require('koa-static')

// TODO 开发环境下要用其他方式
const appPath = path.resolve(__dirname, './dist/server', manifest['app.js'])
const createApp = require(appPath).default
const { renderToString } = require('@vue/server-renderer')

app.use(async (ctx, next) => {
  // TODO 需要优化路由
  const { app, router } = createApp()
  const url = ctx.req.url

  if(router.hasRoute(url)) {
    await router.push(url)
    await router.isReady()

    const appContent = await renderToString(app)

    const html = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')

    ctx.header['content-type'] = 'text/html'
    ctx.body = html.replace('<div id="app">', `<div id="app">${appContent}`)
  } else {
    await next()
  }
})

app.use(static(path.resolve(__dirname, './dist/client')))

app.on('error', (err) => {
  console.log('server error ', err)
})

app.listen(3333)