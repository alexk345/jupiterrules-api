const mongoose = require("mongoose");

const User = require("./User.model");


 
const connection = "mongodb://root:#Test345@srv-captain--mongo:27017/mongo-test";

const connectDb = () => {
  return mongoose.connect(connection,{ useNewUrlParser: true });
};

module.exports = connectDb;
 