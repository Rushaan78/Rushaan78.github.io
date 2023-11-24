const mysql = require("mysql");   //variable declaration
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//funtionality for signup page
exports.signup = (req, res) => {
  console.log(req.body);

  const { name, email, password, passwordConfirmed } = req.body;

  if (!name || !email || !password || !passwordConfirmed) {   //if any of the fields are missing
    return res.render("signup", { message: "All fields are required." });  //displays error message
  }

  db.query(
    "SELECT email FROM user_data WHERE email=?",   //gets emails from database
    [email],
    async (error, result) => {
      if (error) {    //displays error if there is an error fetching data on whether the email already exists in the database
        console.log(error);
        return res.render("signup", {
          message: "An error occurred while checking email availability.",
        });
      }

      if (result.length > 0) {   //if email already exists in the database
        return res.render("signup", {
          message: "This email is already in use.",  //displays message
        });
      } else if (password !== passwordConfirmed) {   //if the confirm password does not match the password
        return res.render("signup", { message: "Passwords do not match." });   //displays message
      }

      let hashedPassword = await bcrypt.hash(password, 8);   //hashs password for encryption
      console.log(hashedPassword);  //displays encryped password

      db.query("INSERT INTO user_data SET ?", {   //if met with no error, it adds the data into the table
        username: name,
        email: email,
        password: hashedPassword,
      });

      if (error) {     //if met with an error displays error
        console.log(error);
      } else {   //else the user successfully signs up
        console.log(result);
        return res.render("signup", { message: "User Signed up" });
      }
    }
  );
};

//funtionality for login page
exports.login = (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {   //if any of the fields are missing
    return res.render("login", { message: "Email and password are required." });  //displays error message
  }

  db.query(
    "SELECT * FROM user_data WHERE email = ?",  //gets emails from database
    [email],
    async (error, results) => {
      if (error) {  //if met with an error displays error
        console.log(error);
        return res.render("login", { 
          message: "An error occurred while fetching user.",  //displays error message
        });
      }

      if (results.length === 0) {  //if email or password is incorrect
        return res.render("login", {
          message: "Email or password is incorrect.", //displays error message
        });
      }

      const isPasswordMatch = await bcrypt.compare(   
        password,
        results[0].password
      );

      if (!isPasswordMatch) {    //if password is not a match
        return res.render("login", {
          message: "Email or password is incorrect.",  //displays error message
        });
      } else {
        console.log("User information:", results[0]);
        return res.render("profile", { user: results[0] }); //leads the user to the profile page and displays their name
      }
    }
  );
};

//funtionality for logout page
exports.logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) { //if met with an error
      console.error("Error destroying session:", error);  //displays error
      return res.status(500).send("Internal Server Error");
    }

    res.redirect("/logout");  //leads to logout page 
  });
};
