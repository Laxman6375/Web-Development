const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

//post middleware
fileSchema.post("save", async function (doc) {
  try {
    console.log("Doc", doc);

    //transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    //send mail
    let info = await transporter.sendMail({
      from: "no-reply@gmail.com",
      to: doc.email,
      subject: "New File Uploaded on Cloudinary",
      html: `<h2>Hello Jee</h2> <p>File Uploaded</p> View Here: <a href=${doc.imageUrl}>${doc.imageUrl}</a>`,
    });

    console.log("Info", info);
  } catch (error) {
    console.error(error);
  }
});

module.exports = mongoose.model("File", fileSchema);
