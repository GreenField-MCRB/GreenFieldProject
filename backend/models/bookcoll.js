const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const bookcoll = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  image: {
    type: String,
  },
  publishedDate: {
    type: String,
  },
  views: Number,
});

// Model
const bookCollection = mongoose.model("bookCollection", bookcoll);

module.exports = bookCollection;
