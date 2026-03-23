let bcrypt = require("bcrypt");
let authModel = require("../Models/authModel");
let jwtHandler = require("../utils/jwtHandler");

let signup = async (name, email, password, role, profile_image) => {
  // make the password hash
  let hashPassword = await bcrypt.hash(password, 10);

  //check if email already exist or not
  let user = await authModel.findUserByEmail(email);
  // haddu jira : email already exist
  // email hadusan jirin

  console.log("user in service", user);

  if (user) {
    return {
      status: false,
      message: "this email already exist",
    };
  }

  //calling model name,email, hashedPassword, role, profile_image
  let response = await authModel.signup(
    name,
    email,
    hashPassword,
    role,
    profile_image,
  );

  if (response[0].affectedRows != 1) {
    return {
      status: false,
      message: "not registere this user",
    };
  }

  return {
    status: true,
    message: "signup successfully",
    userId: response[0].insertId,
  };
};

let login = async (email, password) => {
  let user = await authModel.findUserByEmail(email);

  console.log("user is in", user);

  if (!user) {
    return {
      status: false,
      message: "this email is not exit",
    };
  }

  let isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return {
      status: false,
      message: "Incorrect password",
    };
  }

  let token = await jwtHandler.generateToken(user);

  return {
    status: true,
    message: "Successfully login",
    user: user,
    token: token,
  };
};

module.exports = { signup, login };
