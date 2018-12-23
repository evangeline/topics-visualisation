const { Pool } = require('pg');
const { user, host, database, password } = require('./config');

const pool = new Pool({
  user, host, database, password, port: 5432, ssl: true
});

const getProductTopic = async (req, res, next) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM topic_sizes WHERE topic1 ='${req.params.topic}'`);
    res.status(200).send({ rows });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductTopic
};
