const { Pool } = require('pg');
const { user, host, database, password } = require('./config');

const pool = new Pool({
  user, host, database, password, port: 5432, ssl: true
});

const getProductTopic = async (req, res, next) => {
  const { productTopic } = req.body;
  console.log(productTopic);
  const { rows } = await pool.query(`SELECT * FROM topic_sizes WHERE topic1 ='${productTopic}'`);
  res.status(200).send({ rows });
  return next();
};

module.exports = {
  getProductTopic
};
