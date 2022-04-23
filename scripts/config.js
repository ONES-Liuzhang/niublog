const path = require("path");

function _addPlugin(config, plugin, options) {
  if (config.plugins) {
    config.plugins.push(new plugin(options));
  } else {
    config.plugins = [new plugin(options)];
  }
}

function createWebpackConfig(isSSr, isDev) {
  /**
   * @type {import('webpack').WebpackOptionsNormalized}
   */
  const baseConfig = {
    resolve: {
      alias: {
        "@": "src",
      },
      extensions: [".jsx", ".js", ".json"],
    },
    output: {
      clean: true,
      assetModuleFilename: "assets/[name][ext]",
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.jsx/,
          loader: "babel-loader",
        },
        {
          // 图片配置
          test: /\.(png|jpg|bmp|gif)$/i,
          type: "asset/resource",
          generator: {
            fliename: "img/[name].[ext]", // 打包后的图片会被移动到 ${outputPath}/img文件夹下
          },
        },
        {
          // 字体配置
          test: /\.(png|jpg|bmp|gif)$/i,
          type: "asset/resource",
          generator: {
            fliename: "fonts/[name].[ext]", // 打包后的图片会被移动到 ${outputPath}/fonts文件夹下
          },
        },
        {
          test: /\.md/,
          use: ["babel-loader", path.resolve("./loaders/md-loader")],
        },
        getCssRules(),
      ],
    },
    devServer: {
      host: "0.0.0.0",
      port: 8888,
    },
  };

  function getCssRules() {
    const cssRule = {
      test: /.css$/,
      use: ["css-loader", "postcss-loader"],
    };

    if (isDev) {
      cssRule.use.unshift("style-loader");
    } else {
      cssRule.use.unshift({
        loader: require("mini-css-extract-plugin").loader,
        options: {
          esModule: false, // 使用commonjs规范解析css，require引入可以不加.default
        },
      });
    }

    return cssRule;
  }

  function extendSSRConfig(config) {
    if (isSSr) {
      config.entry = {
        app: "./src/entry-server.js",
      };
      config.externals = [
        require("webpack-node-externals")({ allowlist: /\.(css|vue|jsx)/ }),
      ];
      config.target = "node";
      config.output.library = {
        type: "commonjs2",
      };
      config.output.path = path.resolve(__dirname, "../src/dist/server/");
      config.optimization = {
        splitChunks: false,
        minimize: false,
      };

      _addPlugin(
        config,
        require("webpack-manifest-plugin").WebpackManifestPlugin,
        {
          fileName: "ssr-manifest.json",
        }
      );
    } else {
      config.entry = {
        app: "./src/entry-client.js",
      };
      config.target = "web";
      config.output.library = {
        type: "umd",
      };
      config.output.path = path.resolve(__dirname, "../src/dist/client/");

      // 开发环境下，使用 __CLIENT 标记一下需要从客户端获取数据
      const publicPath = isDev ? "/__CLIENT__" : "./";

      _addPlugin(config, require("html-webpack-plugin"), {
        template: "index.html",
        publicPath,
      });
      _addPlugin(config, require("copy-webpack-plugin"), {
        patterns: [
          {
            from: path.resolve(__dirname, "../assets"),
            to: "assets",
          },
        ],
      });
    }

    config.mode = isDev ? "development" : "production";
  }

  function extendEnvConfig(config) {
    if (!isDev) {
      _addPlugin(config, require("mini-css-extract-plugin"), {
        filename: "css/[name].css",
        chunkFilename: "css/[name].css",
      });
    }
  }

  // 添加插件
  extendSSRConfig(baseConfig);
  extendEnvConfig(baseConfig);

  return baseConfig;
}

module.exports = createWebpackConfig;
