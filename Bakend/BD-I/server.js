//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open folder in vscode
//step5: npm i express
//step6: create server.js

//Server Initiate
const express = require("express");
const app = express();

//used to parse req.body in express -> PUT, Post
const bodyParser = require("body-parser");

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(3000, () => {
  console.log("server started at port no. 3000");
});

//Routes
app.get("/", (req, res) => {
  res.send("hello ji, kaise ho saare");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submiteed Succesfully");
});

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Received an error", error);
  });
