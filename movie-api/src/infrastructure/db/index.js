require('dotenv').config();
const mysql = require('mysql');

const buildLogsDB = require('./logsDB');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

module.exports = {
  logsDB: buildLogsDB(connection),
  connection,
};
