const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    })
  ],
  target: 'node',
  externals: process.env.SSR ? [nodeExternals({ allowlist: /\.(css|vue|jsx)/ })] : '',
  output: {
    path: process.env.SSR 
        ? path.resolve(__dirname, 'src/dist/server/') 
        : path.resolve(__dirname, 'src/dist/client/'),
    library: {
      type: process.env.SSR ? 'commonjs2' : 'umd'
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
    }, 
    {
      // 图片配置
      test: /\.(png|jpg|bmp|gif)$/i,
      type: "asset/resource",
      generator: {
          fliename: "img/[name].[ext]" // 打包后的图片会被移动到 dist/static文件夹下
      }
    },
    {
      // 字体配置
      test: /\.(png|jpg|bmp|gif)$/i,
      type: "asset/resource",
      generator: {
          fliename: "fonts/[name].[ext]" // 打包后的图片会被移动到 dist/fonts文件夹下
      }
    },
    {
      test: /.css$/,
      use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                esModule: false,   // 使用commonjs规范解析css，require引入可以不加.default
            }
        },
        'css-loader',
        'postcss-loader'
      ]}
    ]
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