const express = require('express');
const bodyParser = require('body-parser');
const { getProductTopic } = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

const isProductTopic = (req, res, next) => {
  if (typeof req.body.productTopic === 'string') {
    next();
  } else {
    res.status(400).json({ error: 'Product Topic not specified' }.send());
  }
};

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true,
  }),
  isProductTopic
);

app.get('/api/product', getProductTopic);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: error.message }).send();
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found'}).send();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
