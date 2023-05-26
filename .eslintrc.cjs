module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
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
  parser: '@typescript-eslint/parser',
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
    'max-len': ['error', { code: 120 }],
    'no-console': process.env.PROD ? 'warn' : 'off',
    'no-debugger': process.env.PROD ? 'warn' : 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': process.env.PROD ? 'error' : 'warn',
    'no-unreachable': process.env.PROD ? 'error' : 'warn',
    'no-undef': process.env.PROD ? 'error' : 'warn',
    '@typescript-eslint/semi': 'off'
  }
}
