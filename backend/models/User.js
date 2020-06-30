const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  // favourites: {
  //   type: [Books],
  // },
});

// Model
const user = mongoose.model("user", UserSchema);

module.exports = user;
