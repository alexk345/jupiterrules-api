const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;
 
const connection = "mongodb://root:Test345@srv-captain--mongo:27017/mongo-test1";	

/*
const connectDb = () => {	
  return mongoose.connect(connection,{ useNewUrlParser: true });	  
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});



module.exports = connectDb;
*/


var test = async function () {
  return mongoose.connect(connection,{ useNewUrlParser: true });	  
}

module.exports = test;