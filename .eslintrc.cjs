module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  /*overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',*/
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  rules: {
    curly: ['error', 'all'],
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 120 }],
    'no-console': process.env.PROD ? 'warn' : 'off',
    'no-debugger': process.env.PROD ? 'warn' : 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': process.env.PROD ? 'error' : 'warn',
    'no-unreachable': process.env.PROD ? 'error' : 'warn',
    'no-undef': process.env.PROD ? 'error' : 'warn',
    '@typescript-eslint/semi': 'off',
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'key-spacing': ['error', { 'afterColon': true, 'beforeColon': false }],
    'space-before-blocks': ['error', 'always'],
    'keyword-spacing': ['error', { 'before': true }],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': false}],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline']
  }
}
