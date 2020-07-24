module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
    'jest': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 11,
    'parser': 'babel-eslint',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
