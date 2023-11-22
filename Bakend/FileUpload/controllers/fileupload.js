const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localfileupload = handler function

exports.localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file;
    console.log("file aagyi jee", file);

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("Path =>", path);

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "localFile uploaded successfully!",
    });
  } catch (error) {
    console.log("not able to upload the file on server");
    console.log(error);
  }
};

function isFileTypeSupported(type, supportedtypes) {
  return supportedtypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const maxSize = 5 * 1024 * 1024;

//image upload handler
exports.imageUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log("file aagyi jee", file);

    //validation
    const supportedtypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File type:", fileType);

    if (!isFileTypeSupported(fileType, supportedtypes) || file.size > maxSize) {
      return res.status(400).json({
        success: false,
        message: "file type or size not supported",
      });
    }

    console.log("uploading to cloudinary");
    //file format supported hai
    const response = await uploadFileToCloudinary(file, "Lucky");
    console.log(response);

    //db me entry save karni h
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image successfully uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

//video upload handler

exports.videoUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile;

    //validation
    const supportedtypes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File type:", fileType);

    // todo: add a upper limit of 5Mb for video
    if (!isFileTypeSupported(fileType, supportedtypes) || file.size > maxSize) {
      return res.status(400).json({
        success: false,
        message: "file type not supported",
      });
    }

    const response = await uploadFileToCloudinary(file, "Lucky");
    console.log(response);

    //db me entry save karni h
    const fileData = await File.create({
      name,
      tags,
      email,
      videoUrl: response.secure_url,
    });

    res.json({
      success: true,
      videoUrl: response.secure_url,
      message: "Video successfully uploaded",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

exports.imageReducerUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;

    //validation
    const supportedtypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File type:", fileType);

    // todo: add a upper limit of 5Mb for video
    if (!isFileTypeSupported(fileType, supportedtypes) || file.size > maxSize) {
      return res.status(400).json({
        success: false,
        message: "file type or size not supported",
      });
    }

    const response = await uploadFileToCloudinary(file, "Lucky", 30);
    console.log(response);

    //db me entry save karni h
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Video successfully uploaded",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};
