const { Pool } = require('pg');
const { user, host, database, password } = require('../../config.js');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port: 5432,
  ssl: true
});

const rowToDataset = ({ topic2, topic2_size, combined_size }) => {
  const audienceSize = parseInt(topic2_size, 10) / 1000;
  const combinedSize = parseInt(combined_size, 10) / 1000;
  const productInterest = Math.floor(combinedSize / audienceSize * 100);
  return ({
    audienceTopic: topic2,
    audienceSize,
    combinedSize,
    productInterest
  });
};

const getProductTopic = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM topic_sizes WHERE UPPER(topic1) = UPPER($1)', [req.params.topic]);
    const datasets = rows.map(rowToDataset);
    res.status(200).send({ datasets });
  } catch (error) {
    next(error);
  }
};

const getProductTopics = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT DISTINCT topic1 FROM topic_sizes ORDER BY topic1 ASC');
    const topics = rows.map(({ topic1 }) => topic1);
    res.status(200).send({ topics });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductTopic,
  getProductTopics
};
