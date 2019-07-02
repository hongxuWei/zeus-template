const path =require('path');
const config = require('./webpack.base.config');
const webpack = require('webpack');
const merge = require('webpack-merge');

const _config = {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true, //不跳转
    hot: true,
    open: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(_config, config)
