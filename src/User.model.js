const mongoose = require("mongoose");
const connection = require("./connection.js");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  }
});

const User = connection.model("User", userSchema);

module.exports = User;
