let express = require("express");
let router = express.Router();
let authController = require("../controllers/authController");
let loginLimiter = require("../middleware/loginLimiter");

router.post("/signup", authController.signup);
router.post("/login", loginLimiter, authController.login);

module.exports = router;
