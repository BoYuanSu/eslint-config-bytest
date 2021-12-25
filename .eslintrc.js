module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // '@vue/standard',
    // 'standard',
    // './lib/eslint-base.js',
    // './lib/vue-base.js',
    // './lib/eslint-base.js',
    // './lib/test-vue3-recommended.js',
    // './lib/test-vue3-essential.js',
    // './lib/test-vue3-recommended-base.js',
    // './lib/test-vue3-essential-base.js',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
  },
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
  },
}
