const CracoLessPlugin = require("craco-less");
const { whenProd } = require("@craco/craco");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const CracoRawLoaderPlugin = require("@baristalabs/craco-raw-loader");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true;@import "${require.resolve(path.join(process.cwd(), "src/styles/theme.less"))}";`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoRawLoaderPlugin,
      options: {
        test: /\.html$/, // 这里设置为匹配.html文件
      },
    },
  ],
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    plugins: [
      ...whenProd(
        () => [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
        []
      ),
      new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/zh-cn$/),
    ],
  },
};
