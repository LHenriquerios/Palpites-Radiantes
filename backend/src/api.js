const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;