const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const BlogBook = new Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  MostViewedBook: {
    type: String,
    required: true,
  },
});

// Model
const BlogTopBook = mongoose.model("BlogTopBook", BlogBook);

module.exports = BlogTopBook;
