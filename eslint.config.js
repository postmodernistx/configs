import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}']
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': 'error',
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/quotes': ['error', 'single']
      /*
       '@typescript-eslint/comma-dangle': 'off',
       '@typescript-eslint/semi': 'off',
       'arrow-spacing': ['error', { before: true, after: true }],
       'block-spacing': 'error',
       'brace-style': ['error', '1tbs', { allowSingleLine: false }],
       'comma-dangle': ['error', 'always-multiline'],
       curly: ['error', 'all'],
       'import/no-absolute-path': 'off',
       indent: ['error', 2, { SwitchCase: 1 }],
       'key-spacing': ['error', { afterColon: true, beforeColon: false }],
       'keyword-spacing': ['error', { before: true }],
       'max-len': ['error', { code: 120 }],
       'no-console': process.env.PROD ? 'warn' : 'off',
       'no-debugger': process.env.PROD ? 'warn' : 'off',
       'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
       'no-undef': process.env.PROD ? 'error' : 'warn',
       'no-unreachable': process.env.PROD ? 'error' : 'warn',
       'no-unused-vars': process.env.PROD ? 'error' : 'warn',
       'object-curly-spacing': ['error', 'always'],
       quotes: ['error', 'single'],
       semi: ['error', 'always'],
       'space-before-blocks': ['error', 'always'],
       'space-infix-ops': ['error', { int32Hint: false }],
       */
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
];
