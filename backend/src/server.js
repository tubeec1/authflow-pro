let dotenv = require("dotenv");
dotenv.config();
let PORT = process.env.PORT || 5000;
let app = require("./app");

app.listen(4000, () => {
  console.log(`server is running on port ${PORT}`);
});
