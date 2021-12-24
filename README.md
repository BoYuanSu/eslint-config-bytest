# my custom eslint rule base on vue2/vue3

## Usage


### Installation
```sh
yarn add -D eslint eslint-plugin-standard eslint-plugin-vue eslint-plugin-node eslint-plugin-import eslint-config-bytest eslint-plugin-promise @vue/eslint-config-standard
```

### Configuration



Example `.eslintrc.js`:

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'bytest/lib/vue3-essential-base'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
  },
  rules: {

  }
}
```

avalieble extends:
 - `bytest/lib/base`
 - `bytest/lib/vue2-essential-base`
 - `bytest/lib/vue2-recommended-base`
 - `bytest/lib/vue3-essential-base`
 - `bytest/lib/vue3-recommended-base`

