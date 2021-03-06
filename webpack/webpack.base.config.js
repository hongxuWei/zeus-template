var path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Autoprefixer = require('autoprefixer')
const webpack = require('webpack')

const DIST_PATH = path.join(__dirname, '../dist')
const DEV_USE_MOCK = process.env.MOCK === 'on'

module.exports = {
  entry: {
    app: path.join(__dirname, '../client/src/index.tsx')
  },
  output: {
    filename: 'js/[name].[hash].js',
    // TODO: 使用 CDN 和资源 hash 的示例
    path: DIST_PATH
  },
  resolve: {
    extensions: [".ts", ".tsx", '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/public/index.html'),
    }),
    Autoprefixer,
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../client/public/favicon.ico'),
        to: './'
      }
    ]),
    new webpack.DefinePlugin({ DEV_USE_MOCK })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
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
