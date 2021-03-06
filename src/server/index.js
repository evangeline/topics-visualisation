const express = require('express');
const cors = require('cors');
const path = require('path');
const { getProductTopic, getProductTopics } = require('./db');
const { output } = require('../../config.js');

const app = express();
const PORT = process.env.PORT || 8080; // for heroku

app.use(cors());

app.get('/api/product/:topic', getProductTopic);
app.get('/api/topics', getProductTopics);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', output, 'index.html'));
});
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: error.message }).send();
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' }).send();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
