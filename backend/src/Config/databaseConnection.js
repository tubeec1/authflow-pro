// package - mysql2

let mysql = require("mysql2");

let conn = mysql.createPool({
  //host
  host: process.env.DB_HOST,
  //user
  user: process.env.DB_USER,
  //password
  password: process.env.DB_PASS,
  //databaseName
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = conn.promise();

// e-learning (student, teacher, admin)
// database table signup (id,name,email,password,role,profile_image)
// routes: /api/auth/signup
// /api/auth/login
// /posts/create
//controller : get data of  name, email, password
// by default: role="student", profile_image="/src/img/img.png"
// validation: !name, !email, !password
// calling service by passing name,email,password, role, profile_image
// getting the data passed and make passwrod hashing and then calling model
// getting data then strore in signup table and then return something
// service getting sometjing returned from model
// controller getting something returned from service
// and then controller responses
