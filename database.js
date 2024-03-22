const mysql = require("mysql2/promise");
const sqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root12345",
  database: "vimaldb",
});

sqlPool
  .query("select 1")
  .then((data) => "Connection Established \n" + data)
  .catch((err) => console.log("Connection Failed \n" + err));
