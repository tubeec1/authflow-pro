let express = require("express");
let morgan = require("morgan");
let path = require("path");
const staticPath = path.resolve(__dirname, "public/profileImages");
// codsiyo lo so dirsado
// ms qadatay, codsiga, ya codsigas sameyay, api route
let helmet = require("helmet");
// XSS - Crose Side Scriptiong
// clickjaking
// fileupload - milicious code
let cors = require("cors");

let authRouter = require("./routes/authRouter");
let userRouter = require("./routes/userRouter");

let app = express();

//

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/profileImages", express.static("public/profileImages"));

module.exports = app;
