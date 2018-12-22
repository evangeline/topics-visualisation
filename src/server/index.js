const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const client = new Client();
await client.connect();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/api/product', (req, res, next) => {
  const { productTopic } = req.body;

  // res.send({ username: os.userInfo().username });
  return next();
});

app.listen(8080, () => console.log('Listening on port 8080!'));
