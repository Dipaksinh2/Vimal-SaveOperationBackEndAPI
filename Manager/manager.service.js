const db = require("../database");

module.exports.addManager = async (obj) => {
  const [{ affectedRows }] = await db.query("CALL add_manager(?,?,?,?)", [
    obj.manager_first_name,
    obj.manager_last_name,
    obj.manager_mail_id,
    obj.user_id,
  ]);
  return affectedRows;
};
