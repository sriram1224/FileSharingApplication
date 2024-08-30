const multer = require("multer");
const path = require("path");
const uploadDirectory = path.join(__dirname, "..", "/files");
console.log(uploadDirectory);
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, uploadDirectory);
  },
});
const upload = multer({
  storage: storage,
}).single("resume");

const uploadFile = async (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("file uploaded successfully");

    res.json({
      success: true,
      message: "File uploaded successfully",
    });
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
