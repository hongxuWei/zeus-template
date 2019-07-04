const path =require('path');
const config = require('./webpack.base.config');
const webpack = require('webpack');
const merge = require('webpack-merge');

const _config = {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    watchContentBase: true,
    historyApiFallback: true, //不跳转
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
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
              modules: true
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(_config, config)
