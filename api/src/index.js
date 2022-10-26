/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');
const routes = require('./Routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('##### Error Handler #####');
  console.error(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server startd at http://localhost:3000'));
