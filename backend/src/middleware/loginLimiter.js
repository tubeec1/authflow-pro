// brute force attack - email io password
// password - 10daqiiqo gudahood 10 password - 2 5daqiiqo

let rl = require("express-rate-limit");
let loginLimeter = rl({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: {
    status: false,
    message: "too many trying request please try again later",
  },
});

module.exports = loginLimeter;
