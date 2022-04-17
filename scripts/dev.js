const webpackBaseConfig = require('./webpack.base.config')
const webpackDevConfig = require('./webpack.dev.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
// https://github.com/webpack/memory-fs 可以读取内存
const mfs = require('memory-fs')

const webpackConfig = merge(webpackBaseConfig, webpackDevConfig)
const compiler = webpack(webpackConfig)

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

})