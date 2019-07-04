const config = require('./webpack.base.config')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const _config = {
  mode: 'production',
  plugins: [
    new ExtractTextPlugin('css/[name].[chunkhash:8].css')
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "less-loader"],
          publicPath: '../'
        })
      }
    ]
  }
}

module.exports = merge(config, _config)
