const express = require('express');
const { getProductTopic } = require('./db');

const app = express();
// const PORT = process.env.PORT || 8080;
const PORT = 8080;

app.get('/product/:topic', getProductTopic);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: error.message }).send();
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' }).send();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
