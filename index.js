const base = require('./base.eslint.config.js')
const vue2 = require('./vue2.eslint.config')

module.exports = {
    configs: {
        base: require('./lib/base'),
        vue2: require('./lib/vue2'),
    },
}
