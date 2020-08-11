const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;
 
const connection = "mongodb://srv-captain--mongo:27017/demotest";	




const connectDb = () => {
  var db = mongoose.connect(connection,{ useNewUrlParser: true})	  
  .then(function (db) { // <- db as first argument
    console.log(db)
    console.log("=========================")
    console.log("=========Connected===============")
    console.log("connected "+db.readyState);
    console.log("=========================")
  })
  .catch(function (err) {

    console.log("=========================")
    console.log("=========ERROR===============")
    console.log(err)
    console.log("=========================")
  });


  
  return db;

}



module.exports = connectDb;
