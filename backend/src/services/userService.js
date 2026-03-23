let userModel = require("../Models/userModel");
let authModel = require("../Models/authModel");
let bcrypt = require("bcrypt");
let profile = async (id) => {
  let response = await userModel.findById(id);
  return {
    status: true,
    message: "user info is here",
    user: response,
  };
};

let updateProfile = async (name, email, password, profile_image) => {
  let pass = "";
  let existingUser = await authModel.findUserByEmail(email);
  if (!existingUser) {
    return {
      status: false,
      message: "This user's email is not exist",
    };
  }

  if (password) {
    pass = await bcrypt.hash(password, 10);
  } else {
    pass = existingUser.password;
  }

  let response = await userModel.updateProfile(
    name,
    email,
    pass,
    profile_image,
  );
  if (response > 0) {
    return {
      status: true,
      message: "successfully updated this user",
    };
  } else {
    return {
      status: false,
      message: "Not successfully updated this user",
    };
  }
};

module.exports = { profile, updateProfile };
