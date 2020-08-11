const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;
 
const connection = "mongodb://srv-captain--mongo:27017/demotest";	


const connectDb = () => {	
return mongoose.connect(connection,{ useNewUrlParser: true })	  
  .then(function (db) { // <- db as first argument
    console.log(db)
    console.log("=========================")
    console.log("=========ERROR===============")
    console.log("=========================")
  })
  .catch(function (err) {})
};

module.exports = connectDb;

