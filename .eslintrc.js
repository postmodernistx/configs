module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  // extends: ['plugin:vue/vue3-recommended', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unreachable': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-undef': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'max-len': ['error', { code: 120 }],
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 150,
      },
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 3,
        allowFirstLine: true,
      },
    }],
    'vue/singleline-html-element-content-newline': ['off', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea'],
    }],
  },
};
