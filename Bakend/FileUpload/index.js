const express = require("express");
const app = express();

const MONGODB_URL = process.env.MONGODB_URL;

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//db se connection
const db = require("./config/database");
db.connect();

//cloud se connect kar rahe h
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
});
