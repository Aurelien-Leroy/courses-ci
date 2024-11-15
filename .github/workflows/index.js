// index.js

const express = require('express');
const app = express();

const secret = "mySecretKey"; // Cette variable ne doit pas apparaître dans les logs

app.get('/', (req, res) => {
  // Oubli de console.log, qui pourrait exposer des informations sensibles
  console.log("Secret:", secret);  // Cette ligne ne devrait pas être dans le code de production
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
