/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    env: {
      jest: true, // Active l'environnement Jest
    },
    plugins: ["jest"], // Ajouter le plugin jest
    extends: ["plugin:jest/recommended"], // Appliquer les règles recommandées par Jest
    rules: {
      // Vous pouvez ajouter des règles personnalisées ici si nécessaire
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  configs.recommended,
];
