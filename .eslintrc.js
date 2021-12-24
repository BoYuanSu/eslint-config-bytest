module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'standard',
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
