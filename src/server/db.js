const { Pool } = require('pg');
const { user, host, database, password } = require('./config');

const pool = new Pool({
  user, host, database, password, port: 5432, ssl: true
});

const normaliseRows = ({topic2, topic2_size, combined_size}) => {
  const audienceSize = parseInt(topic2_size, 10);
  const combinedSize = parseInt(combined_size, 10);
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
    const { rows } = await pool.query(`SELECT * FROM topic_sizes WHERE topic1 ='${req.params.topic}'`);
    const normalisedRows = rows.map(normaliseRows);
    res.status(200).send({ normalisedRows });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductTopic
};
