let jwtHandler = require("../utils/jwtHandler");
let authMiddleware = async (req, res, next) => {
  let authorization = req.headers.authorization;
  if (!authorization) {
    return res.json({
      status: false,
      message: "There is not token",
    });
  }

  let token = authorization.split(" ")[1];
  let response = await jwtHandler.verifyToken(token);
  if (response.status == false) {
    return res.json(response);
  }
  let user = {
    id: response.result.id,
    role: response.result.role,
  };
  req.user = user;
  next();
};

module.exports = authMiddleware;
