let express = require("express");
let authMiddleware = require("../middleware/authMiddleware");
let userController = require("../controllers/userController");
let profileUploadImage = require("../middleware/uploadProfileImage");

let router = express.Router();

router.get("/me", authMiddleware, userController.profile);
router.put(
  "/me-update",
  authMiddleware,
  profileUploadImage.single("profile_image"),
  userController.updateProfile,
);

module.exports = router;
