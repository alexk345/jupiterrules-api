const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;
 

const connection = "mongodb://srv-captain--mongo:27017/mongo-test";	

const connectDb = () => {	
  return mongoose.connect(connection,{ useNewUrlParser: true });	  
};

connectDb.on('error', console.error.bind(console, 'connection error:'));
connectDb.once('open', function() {
  console.log('connected')
});

module.exports = connectDb;