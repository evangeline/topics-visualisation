const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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

// const allowCrossDomain = (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// };

app.use(
  // allowCrossDomain,
  // cors({
  //   credentials: true,
  //   methods: ['GET'],
  // }),
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
