const express = require("express");
const app = express();

require("dotenv").config;
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

const connectDb = require("./config/database");
connectDb();

app.listen(PORT, () => {
  console.log("app is running");
});

app.get("/", (req, res) => {
  res.send("This is homepage");
});
