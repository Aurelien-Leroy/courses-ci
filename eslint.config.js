const globals = require('globals');
const { configs } = require('@eslint/js');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
    rules: {
      // Définissez des règles ici si nécessaire
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  configs.recommended,
];
