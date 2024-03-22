const db = require("../database");

module.exports.getUsers = async () => {
  const [rows] = await db.query("Select * from vimal_user_info");
  return rows;
};

module.exports.addUser = async (obj) => {
  const [{ affectedRows }] = await db.query("CALL add_user(?,?,?,?,?,?,?,?)", [
    obj.user_first_name,
    obj.user_last_name,
    obj.user_preferred_name,
    obj.user_pronounce,
    obj.user_work_email,
    obj.user_phone_no,
    obj.user_fax,
    obj.user_department,
  ]);
  return affectedRows;
};
