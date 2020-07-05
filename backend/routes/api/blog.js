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
  console.log(req.body);
  const data = req.body;

  const newBlogMsg = new BlogTopBook(data);

  //save the data
  newBlogMsg.save((error) => {
    if (error) {
      console.log(error);
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

// router.get("/books/:title", (req, res) => {
//   console.log(req.params);
//   BlogTopBook.find({ title: req.params.title })
//     .then((book) => res.json(book))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
// router.post("/name", (req, res) => {
//   const data = {
//     username: "jkil",
//     age: 25,
//   };
//   res.json(data);
// });

module.exports = router;
