const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send({ message: 'Hello, world!' });
});

app.listen(3000, () => console.log('Server startd at http://localhost:3000'));
