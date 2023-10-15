const express = require("express");
const app = express();
const PORT = 3000;

//get request
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/car", (req, res) => {
  res.send("received a post request");
});

//adding middlewares
app.use(express.json());

app.listen(3000, () => {
  console.log(`app is listening on port ${PORT}`);
});
