module.exports = {
  env: {
    node: true
  },
  extends: [
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console':  'warn',
    'no-debugger':  'warn',
    'vue/max-attributes-per-line': [1, {
      singleline: 3,
      multiline: 1
    }],
    'no-empty-pattern': 'warn',
    quotes: ['warn', 'single'],
    'no-unused-vars': 'warn',
    indent: ['warn', 2],
    'comma-spacing': ['warn'],
    'comma-dangle': ['warn', 'always-multiline'],
    'key-spacing': ['warn', { beforeColon: false }],
    'keyword-spacing': ['warn'],
    'space-in-parens': ['warn'],
    'space-before-function-paren': ['warn', 'always'],
    'space-before-blocks': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'no-multi-spaces': 'warn',
    'arrow-spacing': 'warn',
    'space-infix-ops': 'warn',
    'vue/html-closing-bracket-spacing': ['warn'],
    'vue/html-indent': ['warn', 2],
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/no-multi-spaces': ['warn', {
      ignoreProperties: false
    }],
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'semi': ['warn', 'never'],
    'quote-props': ['warn', 'as-needed'],
  }
}
