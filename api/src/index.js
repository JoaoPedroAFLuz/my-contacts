/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./Routes');

const PORT = 3001;

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server startd at http://localhost:${PORT}`));
