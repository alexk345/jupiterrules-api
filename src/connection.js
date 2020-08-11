const mongoose = require("mongoose");

const User = require("./User.model");

mongoose.Promise = global.Promise;

 
const connection = "mongodb://srv-captain--mongo:27017/mongo-test";



  

// Connecting to the database
const connect = async function () {
  var options = {
    //user: "root",
    //pass: "#Test345",
    useNewUrlParser: true,
    keepAlive:true 
  };

  const uri = connection; // Will return DB URI 
  console.log(`Connecting to DB - uri: ${uri}`);
  return mongoose.connect(uri, options);
};


(async () => {
  try {
   const connected = await connect();
   
  module.exports = connected;

  } catch(e) {
   console.log('Error happend while connecting to the DB: ', e.message)
  }
})();



 