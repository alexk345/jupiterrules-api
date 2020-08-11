const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;

 
const connection = "mongodb://srv-captain--mongo:27017/mongo-test";


var options = {
  //user: "root",
  //pass: "#Test345",
  useNewUrlParser: true,
  keepAlive:true 
  };
  
  

const connectDb = () => {
  return mongoose.connect(connection,options)
  .then(() => console.log('Connected to MongoDB ...'))
  .catch(err => console.error('Could not connect to MongoDB:‌', err));
};

module.exports = connectDb;
 