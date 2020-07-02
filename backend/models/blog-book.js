const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/BlogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected");
});
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
  views: Number,
});

// Model
const BlogTopBook = mongoose.model("BlogTopBook", BlogBook);

module.exports = BlogTopBook;
