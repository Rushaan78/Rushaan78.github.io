const express = require("express");   //declarations
const session = require("express-session");
const mysql = require("mysql");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const path = require("path");
const app = express();

const port = 5011;   //port

const db = mysql.createConnection({    //creates sql connection
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((error) => {   //establishes sql connection
  if (error) {  //if there is an error
    console.log(error);   //displays error
  } else {  //else displays message saying connection complete
    console.log("Mysql Connected....");
  }
});

const publicDirectory = path.join(__dirname, "./public"); //set path to public directory
app.use(express.static(publicDirectory));
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/pages"));  //routes for pages
app.use("/auth", require("./routes/auth"));  //routes for authentication pages

app.listen(port, () => {  //enables session to start
  console.log(`Server started on port ${port}`);
});
