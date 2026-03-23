// npm install jsonwebtoken
let jwt = require("jsonwebtoken");
const { response } = require("../app");

let generateToken = (user) => {
  let payload = { id: user.id, role: user.role };
  let token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

let verifyToken = (token) => {
  try {
    let result = jwt.verify(token, process.env.JWT_SECRET);
    return {
      status: true,
      result: result,
    };
  } catch (err) {
    return {
      status: false,
      result: err.message,
    };
  }
};

module.exports = { generateToken, verifyToken };
