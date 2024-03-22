const db = require("../database");

module.exports.addWorkAddress = async (obj) => {
  const [{ affectedRows }] = await db.query(
    "CALL add_work_address(?,?,?,?,?,?)",
    [
      obj.address_1,
      obj.address_2,
      obj.address_city,
      obj.address_province,
      obj.address_country,
      obj.address_zipcode,
    ]
  );
  return affectedRows;
};
