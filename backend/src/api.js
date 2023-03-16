const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

app.get('/', (_req, res) => {
  res.send('Helo World!');
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;