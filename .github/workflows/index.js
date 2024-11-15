// index.js

const express = require('express');
const app = express();

const secret = "mySecretKey"; // Cette variable ne doit pas apparaître dans les logs

app.get('/', (req, res) => {
  // Oubli de console.log, qui pourrait exposer des informations sensibles
  res.send('Hello World!');
});

app.listen(3000, () => {
});
