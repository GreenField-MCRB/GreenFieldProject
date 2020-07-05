const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
//import models
const User = require("../../models/User");

// ROUTE POST api/users

router.post("/", (req, res) => {
  const { fullName, userName, email, password } = req.body;

  // simple validation :
  if (!fullName || !userName || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "user aleady exists" });
    const newUser = new User({
      fullName,
      userName,
      email,
      password,
    });
//*******************userloaded************* */





//******************************************* */
    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          //token parameter
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            // {expiresIn: 3600}
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  fullName: user.fullName,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});
module.exports = router;
