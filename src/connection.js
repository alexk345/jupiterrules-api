const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;
 
 
const connection = "mongodb://root:Test345#srv-captain--mongo:27017/mongo-test";	

const connectDb = () => {	
  return mongoose.connect(connection,{ useNewUrlParser: true });	  
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});

/*

let mongoConnectionLocal = {
  'url':`mongodb://root:Test345#srv-captain--mongo:27017/mongo-test";	`
  };
  mongoose.connect(mongoConnectionLocal.url, {auth:{authdb:"admin"}}, err => { if(err) { console.log(err); }});
  
  var options = {
  auth: {authdb: 'admin'},
  user: process.env.MongoDBLocalUser,
  pass: process.env.MongoDBLocalPassword,
  }
  let mongoConnectionLocal = {
  'url': `mongodb://srv-captain--mongo:27017/mongo-test`
  };

  const connectDb = mongoose.connect(mongoConnectionOnline.url, options, err => { if(err) { console.log(err); }});
  */


module.exports = connectDb;