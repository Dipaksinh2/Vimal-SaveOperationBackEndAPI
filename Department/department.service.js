const db = require("../database");

module.exports.getDepartments = async () => {
  const [rows] = await db.query("Select * from vimal_department");
  return rows;
};
