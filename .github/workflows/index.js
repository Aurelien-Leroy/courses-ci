// index.js

const express = require('express');
const app = express();

// Middleware de log avec Morgan pour les requêtes HTTP
const morgan = require('morgan');
app.use(morgan('combined')); // Log les requêtes HTTP en format "combined" (recommandé en production)

// Route principale
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Catch-all pour les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack); // Log l'erreur dans la console (en développement)
  res.status(500).send('Something went wrong!');
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
