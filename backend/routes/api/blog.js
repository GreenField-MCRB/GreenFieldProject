const express = require("express");

const router = express.Router();

const BlogTopBook = require("../../models/blog-book");

router.get("/", (req, res) => {
  BlogTopBook.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  const newBlogMsg = new BlogTopBook(data);

  //save the data
  newBlogMsg.save((error) => {
    if (error) {
      res.status(500).json({
        msg: "server error"
      });
    } else {
      res.json({
        msg: "data saved succefully"
      });
    }
  });
});



module.exports = router;
