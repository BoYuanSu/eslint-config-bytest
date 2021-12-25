module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['vue'],
  extends: [
    '@vue/standard',
    'bytest/lib/base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/require-explicit-emits': ['warn'],
  },
}
