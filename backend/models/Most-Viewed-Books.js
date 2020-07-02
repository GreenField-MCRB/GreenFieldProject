const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const topBooks = new Schema({
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
const mostViewed = mongoose.model("mostViewed", topBooks);

module.exports = mostViewed;
