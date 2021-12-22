// console.log('🚀 ~ require(./lib/vue2),', require('./lib/base'),)
module.exports = {
    configs: {
        base: require('./lib/base'),
        vue2: require('./lib/vue2-essential-base'),
        base: require('./lib/vue2-recommended-base'),
        vue3: require('./lib/vue3-essential-base'),
        vue3: require('./lib/vue3-recommended-base'),
    },
}
