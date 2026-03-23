let conn = require("../Config/databaseConnection");

let signup = async (name, email, password, role, profile_image) => {
  console.log(name, email, password, role, profile_image);
  let response = await conn.execute(
    "insert into users(name, email, password, role,profile_image ) values(?,?,?,?,?)",
    [name, email, password, role, profile_image],
  );
  console.log("in model signup response are in, ", response);
  return response;
};

let findUserByEmail = async (email) => {
  try {
    let [rows, fields] = await conn.execute(
      "select * from users where email=?",
      [email],
    );
    return rows[0];
  } catch (err) {
    return {
      status: false,
      message: err.message,
    };
  }
};

module.exports = { signup, findUserByEmail };
