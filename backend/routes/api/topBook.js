const express = require("express");

const router = express.Router();

const TopBook = require("../../models/Most-Viewed-Books");

router.get("/api/blog", (req, res) => {
  TopBook.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;
