# my custom eslint rule base on vue2/vue3

## Usage


### Installation
```sh
yarn add -D eslint @vue/eslint-config-standard eslint-plugin-vue eslint-config-bytest
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

available extends:
 - `bytest/lib/base`
 - `bytest/lib/vue2-essential-base`
 - `bytest/lib/vue2-recommended-base`
 - `bytest/lib/vue3-essential-base`
 - `bytest/lib/vue3-recommended-base`

