module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 2021, // Assurez-vous d'utiliser une version compatible d'ECMAScript
    },
    rules: {
      'constructor-super': 'off',
    },
  },
  {
    languageOptions: {
      globals: require('globals').browser,
    },
  },
  require('@eslint/js').configs.recommended,
];
