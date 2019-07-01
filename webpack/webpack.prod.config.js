let config = require('./webpack.base.config')

const _config = {
  mode: 'production'
}

module.exports = Object.assign({}, config, _config)