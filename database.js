const mysql = require("mysql2/promise");

const sqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root12345",
  database: "vimaldb",
});

module.exports = sqlPool;
