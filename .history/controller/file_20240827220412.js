const multer = require("multer");
const path = require("path");
const uploadDirectory = path.join(__dirname,,'..', "/files");
console.log(uploadDirectory);
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "/tmp/my-uploads");
  },
});
const upload = multer({
  storage,
});

const uploadFile = async (req, res) => {
  res.json({
    success: true,
    message: "File uploaded successfully",
  });
};
const generatelink = async (req, res) => {
  res.json({
    success: true,
    message: "link generated successfully",
  });
};
const downloadFile = async (req, res) => {
  res.json({
    success: true,
    message: "File downloades successfully",
  });
};
const sendfile = async (req, res) => {
  res.json({
    success: true,
    message: "File Sent successfully",
  });
};
const fileController = {
  uploadFile,
  generatelink,
  downloadFile,
  sendfile,
};
module.exports = fileController;
