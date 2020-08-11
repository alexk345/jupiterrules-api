const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;
 
const connection = "mongodb://root:Test345@srv-captain--mongo:27017/demotest";	


const connectDb = () => {	
  return mongoose.connect(connection,{ useNewUrlParser: true });	  
};

module.exports = connectDb;

