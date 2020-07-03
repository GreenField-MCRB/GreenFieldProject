const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
//import models
const User = require("../../models/User");

// ROUTE POST api/auth

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // simple validation :
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "user does not exist" });

    // validate password :
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "invalid password" });
      //if theres a match
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

// route GET api/auth/user
// access protected
router.get("/user", auth, (req, res) => {
  // auth mean protected
  User.findById(req.user.id)
    .select("-password") // don't return the password
    .then((user) => res.json(user)); // validate the user with the token
});
module.exports = router;
 