const express = require('express');
const bodyParser = require('body-parser');
const { getProductTopic } = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/api/product', getProductTopic);

app.listen(8080, () => console.log('Listening on port 8080!'));
