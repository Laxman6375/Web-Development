const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db ka connection is successful"))
    .catch((err) => {
      console.log("error aaya h");

      process.exit(1);
    });
};

module.exports = dbConnect;
