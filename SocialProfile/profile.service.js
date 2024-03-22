const db = require("../database");

module.exports.addProfile = async (obj) => {
  const [{ affectedRows }] = await db.query("CALL add_profile(?)", [
    obj.profile_name,
  ]);
  return affectedRows;
};
