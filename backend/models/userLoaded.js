const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const UserLoaded = new Schema({
  fullName: {
    type: String
  }
});

// Model
const UserLoad = mongoose.model("UserLoad", UserLoaded);

module.exports = UserLoad;
