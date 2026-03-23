let multer = require("multer");
let path = require("path");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/profileImages");
  },
  filename: (req, file, cb) => {
    let uniqueName = Date.now() + "_" + Math.round(Math.random * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});
let fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only Image Files allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});

module.exports = upload;
