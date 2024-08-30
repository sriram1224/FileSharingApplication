const multer = require("multer");
const path = require("path");
const uploadDirectory = path.join(__dirname, "..", "/files");
console.log(uploadDirectory);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  },
});
const upload = multer({
  storage: storage,
}).single("file");

const uploadFile = async (req, res) => {
  upload(req, res, (error) => {
    console.log(req.body);
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
