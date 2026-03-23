let conn = require("../Config/databaseConnection");

let findById = async (id) => {
  let [rows] = await conn.execute("select * from users where id=?", [id]);
  return rows[0];
};

let updateProfile = async (name, email, password, profile_image) => {
  let [rows, fields] = await conn.execute(
    "update users set name=?, password=?, profile_image=? where email=?",
    [name, password, profile_image, email],
  );

  return rows.affectedRows;
};

module.exports = { findById, updateProfile };
