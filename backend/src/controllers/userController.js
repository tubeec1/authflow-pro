let userService = require("../services/userService");
let profile = async (req, res) => {
  let user = req.user;
  if (!user.id) {
    return res.json({
      status: false,
      message: "There is no id",
    });
  }

  let response = await userService.profile(user.id);
  return res.json(response);
};

let updateProfile = async (req, res) => {
  let data = req.body;
  let name = data.name;
  let email = data.email;
  let password = data.password || "";
  let profile_image = `profileImages/${req.file.filename}`;
  if (!name) {
    return res.json({
      status: false,
      message: "Name field is required",
    });
  }
  if (!email) {
    return res.json({
      status: false,
      message: "Email is not exist",
    });
  }
  let response = await userService.updateProfile(
    name,
    email,
    password,
    profile_image,
  );
  return res.json(response);
};
module.exports = { profile, updateProfile };
