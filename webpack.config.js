const path = require('path')
const isSSr = !!process.env.SSR
const isDev = process.env.NODE_ENV === 'development'

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const baseConfig = {
  resolve: {
    alias: {
      '@': 'src'
    },
    extensions: ['.jsx', '.js', '.json']
  },
  output: {
    clean: true
  },
  module: {
    rules: [
      {
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
        test: /\.md/,
        use: ['html-loader', 'markdown-loader']
        // use: [require('./loaders/md-loader')]
      },
      getCssRules()
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8888
  }
}

function getCssRules() {
  const cssRule = {
    test: /.css$/,
    use: ['css-loader', 'postcss-loader']
  }

  if(isDev) {
    cssRule.use.unshift('style-loader')
  } else {
    cssRule.use.unshift({
      loader: require('mini-css-extract-plugin').loader,
      options: {
          esModule: false,   // 使用commonjs规范解析css，require引入可以不加.default
      }
    })
  }

  return cssRule
}

function extendSSRConfig(config) {
  if(isSSr) {
    config.entry = {
      app: './src/entry-server.js'
    }
    config.externals = [require('webpack-node-externals')({ allowlist: /\.(css|vue|jsx)/ })]
    config.target = 'node'
    config.output.library = {
      type: 'commonjs2'
    }
    config.output.path = path.resolve(__dirname, 'src/dist/server/')
    config.optimization = {
      splitChunks: false,
      minimize: false
    }

    _addPlugin(config, require('webpack-manifest-plugin').WebpackManifestPlugin, {
      fileName: 'ssr-manifest.json'
    })
  } else {
    config.entry = {
      app: './src/entry-client.js'
    }
    config.target = 'web'
    config.output.library = {
      type: 'umd'
    }
    config.output.path = path.resolve(__dirname, 'src/dist/client/')

    const publicPath = isDev ? 'http://localhost:8887/' : './'
    
    _addPlugin(config, require('html-webpack-plugin'), {
      template: 'index.html',
      publicPath,
    })
  }
  
  config.mode = isDev ? 'development' : 'production'
}

function extendEnvConfig(config) {
  if(!isDev) {
    _addPlugin(config, require('mini-css-extract-plugin'), {
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    })
  }
}

function _addPlugin(config, plugin, options) {
  if(config.plugins) {
    config.plugins.push(new plugin(options))
  } else {
    config.plugins = [new plugin(options)]
  }
}

// 添加插件
extendSSRConfig(baseConfig)
extendEnvConfig(baseConfig)

module.exports = baseConfig