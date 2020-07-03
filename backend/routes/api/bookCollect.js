const express = require("express");

const router = express.Router();

const bookCollection = require("../../models/bookcoll");

router.get("/api/bookCollect", (req, res) => {
  BlogTopBook.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.post("/api/bookCollect", (req, res) => {
  console.log(req.body);
  const data = req.body;

  const newBook = new bookCollection(data);

  //save the data
  newBook.save((error) => {
    if (error) {
      res.status(500).json({
        msg: "server error",
      });
    } else {
      res.json({
        msg: "data saved succefully",
      });
    }
  });
});

module.exports = router;
