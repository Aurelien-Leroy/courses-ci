// eslint.config.mjs
export default {
  extends: ["eslint:recommended"],
  env: {
    node: true,
    es2021: true, // Veuillez vérifier la version de Node que vous utilisez (par exemple, es2021)
  },
  parserOptions: {
    ecmaVersion: 2021, // Assurez-vous que votre ECMAScript version est bien définie pour éviter des erreurs de syntaxe.
  },
  rules: {
    "constructor-super": "off",  // Désactive la règle "constructor-super"
    "no-undef": "off",           // Désactive les erreurs de variables non définies, si nécessaire
    // Ajoutez ici d'autres règles que vous souhaitez ajuster ou désactiver
  },
};
