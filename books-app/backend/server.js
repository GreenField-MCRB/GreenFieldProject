const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 8080;

//************************************ */
// ************mongod DB*************
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/BlogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected");
});
//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//********************* */
//*******routes******** */

app.use(morgan("tiny"));
app.use(require("./routes/api/blog"));

app.listen(PORT, console.log(`server is running on port ${PORT}`));
