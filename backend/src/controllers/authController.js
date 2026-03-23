let authService = require("../services/authService");

let signup = async (req, res, next) => {
  let data = req.body;
  let name = data.name;
  let email = data.email;
  let password = data.password;
  let role = "student";
  let profile_image = "profileImages/defaultProfileImage.jpg";

  // validation
  if (!name) {
    return res.json({
      status: false,
      message: "name field is required",
    });
  }
  if (!email) {
    return res.json({
      status: false,
      message: "email field is required",
    });
  }
  if (!password) {
    return res.json({
      status: false,
      message: "password field is required",
    });
  }

  //calling service
  try {
    let respond = await authService.signup(
      name,
      email,
      password,
      role,
      profile_image,
    );

    return res.json(respond);
  } catch (err) {
    next(err);
  }
};

let login = async (req, res) => {
  let data = req.body;
  let email = data.email;
  let password = data.password;
  if (!email) {
    return res.json({
      status: false,
      message: "Email field is required",
    });
  }
  if (!password) {
    return res.json({
      status: false,
      message: "password field is required",
    });
  }

  let response = await authService.login(email, password);
  return res.json(response);
};

module.exports = { signup, login };
