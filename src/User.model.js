//const mongoose = require("mongoose");
const connection = require("connection");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  }
});

const User = connection.model("User", userSchema);

module.exports = User;
