const user = process.env.USER;
const host = process.env.HOST;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const output = process.env.OUTPUT_DIRECTORY;

module.exports = {
  user,
  host,
  database,
  password,
  output
};
