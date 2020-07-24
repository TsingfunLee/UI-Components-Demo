module.exports = {
  'extends': ['stylelint-config-standard', 'stylelint-config-recess-order'],
  'plugins': ['stylelint-order'],
  'rules': {
    'indentation': [2, {
      'severity': 'warning',
    }],
    'number-leading-zero': 'always',
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'
  }
}