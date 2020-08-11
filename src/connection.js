const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;
 
const connection = "mongodb://root:Test345@srv-captain--mongo:27017/demotest&w=1";	




const connectDb = () => {	
mongoose.set('debug', true); // turn on debug  
return mongoose.connect(connection,{ useNewUrlParser: true,auth:{authdb:"admin"} })	  
  .then(function (db) { // <- db as first argument
    console.log(db)
    console.log("=========================")
    console.log("=========ERROR===============")
    console.log("=========================")
  })
  .catch(function (err) {})
};

module.exports = connectDb;

