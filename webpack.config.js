const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals')
const path = require('path')

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const config = {
  mode: 'production',
  entry: {
    'app': process.env.SSR ? './src/entry-server.js' : './src/entry-client.js'
  },
  resolve: {
    alias: {
      '@': 'src'
    },
    extensions: ['.jsx', '.js', '.json']
  },
  plugins: [
    new WebpackManifestPlugin({ fileName: 'ssr-manifest.json' }),
  ],
  target: 'node',
  externals: [nodeExternals({ allowlist: /\.(css|vue|jsx)/ })],
  output: {
    path: process.env.SSR 
        ? path.resolve(__dirname, 'src/dist/server/') 
        : path.resolve(__dirname, 'src/dist/client/'),
    library: {
      type: 'commonjs2'
    },
    clean: true
  },
  // 服务器渲染不需要分包，因为内存读取飞快
  optimization: {
    splitChunks: false,
    minimize: false
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.jsx/,
      loader: 'babel-loader'
    }]
  }
}

function addPlugin(plugin, options) {
  if(config.plugins) {
    config.plugins.push(new plugin(options))
  } else {
    config.plugins = [new plugin(options)]
  }
}

if(!process.env.SSR) {
  addPlugin(HtmlWebpackPlugin, {
    template: 'index.html'
  })

  config.target = 'web'
}

module.exports = config