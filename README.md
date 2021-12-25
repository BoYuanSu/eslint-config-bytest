# my custom eslint rule base on vue2/vue3

## Usage


### Installation

require "eslint-plugin-vue@^8.2.0",please update vue2 project for correct version

```sh
yarn add -D eslint-config-bytest eslint-plugin-vue
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
 - `bytest/lib/eslint-base`: define custom eslint rules
 - `bytest/lib/vue-base`: define custom vue rules
 - `bytest/lib/base`: define custom vue & eslint rules
 - `bytest/lib/vue2-essential-base`: base on `bytest/lib/base` and vue-essential rules
 - `bytest/lib/vue2-recommended-base`: base on `bytest/lib/base` and vue-recommended rules
 - `bytest/lib/vue3-base`: base on `bytest/lib/base` and define custom vue3 rules
 - `bytest/lib/vue3-essential-base`: base on `bytest/lib/vue3-base` and vue3-essential rules
 - `bytest/lib/vue3-recommended-base`: base on `bytest/lib/vue3-base` and vue3-recommended rules

