const db = require("../database");

module.exports.addProfile = async (obj) => {
  const [{ affectedRows }] = await db.query("CALL add_profile(?,?,?)", [
    obj.linkedin,
    obj.facebook,
    obj.others,
  ]);

  return affectedRows;
};
