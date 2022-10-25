const express = require('express');
const router = require('./Routes');

const app = express();
app.use(router);

app.listen(3000, () => console.log('Server startd at http://localhost:3000'));
