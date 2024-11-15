// eslint.config.mjs
import { defineConfig } from 'eslint';

export default defineConfig([
  {
    // Définition des environnements
    env: {
      node: true,
      es2021: true, // Spécifiez la version d'ES6 si vous utilisez Node.js 14 ou plus récent
    },
    parserOptions: {
      ecmaVersion: 2021, // Assurez-vous que cette version est correcte
    },
    rules: {
      // Vos règles personnalisées
      'constructor-super': 'off',  // Désactivez la règle qui pose problème
      // Autres règles...
    }
  },
]);
