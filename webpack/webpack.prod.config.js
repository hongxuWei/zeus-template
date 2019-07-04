const config = require('./webpack.base.config')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const _config = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('css/[name].[chunkhash:8].css')
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                },
                localsConvention: 'camelCaseOnly'
              }
            },
            "postcss-loader",
            {
              loader: "less-loader",
              options: {
                modules: true,
              }
            }
          ],
          publicPath: '../'
        })
      }
    ]
  }
}

module.exports = merge(config, _config)
