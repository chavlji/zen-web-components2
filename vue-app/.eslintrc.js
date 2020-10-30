module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    $: 'readonly',
    Chart: 'readonly',
    tinycolor: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  "settings": {
    "import/resolver": {
      'alias': [
        ['@', './src'],
      ]
    },
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'no-continue': 0,
    'no-console': 0,
    'no-prototype-builtins': 0,
    'no-nested-ternary': 0,
    "arrow-parens": [ 'error', "as-needed" ],
    "brace-style": [ 'error', "1tbs", {
      "allowSingleLine": false
    } ],
    'default-case': 0,
    'space-before-function-paren': 0,
    'func-names': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 3,
        allowFirstLine: false,
      },
    }],
    'guard-for-in': 0,
    // Turn back some day:
    'no-loop-func': 0,
    'no-extend-native': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'vue/no-v-html': 0,
  },
};
