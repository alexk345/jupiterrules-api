const express = require('express');
const app = express();
const connectDb = require('./src/connection');
const User = require('./src/User.model');
const cors = require('cors');

app.use(cors());

const PORT = 8080;

app.get("/users", async (req, res) => {
  console.log("request recieved /users1");
  

  try {
    console.log("entering try block");
    const users = await User.find();
    console.log("this message is never seen");
  }
  catch (e) {
    console.log("entering catch block");
    console.log(e);
    console.log("leaving catch block");
  }
  finally {
    console.log("entering and leaving the finally block");
  }


  console.log("request recieved /users2");
  res.json(users);
});

app.get("/user-create", async (req, res) => {
  const user = new User({ username: "userTest" });

  await user.save().then(() => console.log("User created"));

  res.send("User created \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
