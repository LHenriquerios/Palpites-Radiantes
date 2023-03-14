module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'keyword-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'no-mixed-operators': 'error',
    'object-curly-spacing': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'comma-style': ['error', 'last'],
    'no-console': 'warn',
  }
};
