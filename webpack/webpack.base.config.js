var path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: path.join(__dirname, '../client/src/index.tsx')
  },
  output: {
    filename: 'js/[name].[hash].js',
    // TODO: 使用 CDN 和资源 hash 的示例
    path:  path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/public/index.html'),
    }),
    new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
    Autoprefixer,
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "less-loader"]
        })
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2
        },
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
          priority: 10,
          minSize: 0,
        }
      }
    }
  }
}
