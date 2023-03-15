const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;