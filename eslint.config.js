const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  {
    ignores: ['dist', 'flow-typed', 'node_modules'],
  },
  ...compat.extends('eslint-config-bzc'),
  {
    rules: {
      'global-require': 'off',
      'import/no-dynamic-require': 'off',
      'max-len': 'off',
      'no-restricted-syntax': 'off',
    },
  },
];
