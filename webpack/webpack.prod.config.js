const config = require('./webpack.base.config')
const merge = require('webpack-merge')

const _config = {
  mode: 'production'
}

module.exports = merge(config, _config)
