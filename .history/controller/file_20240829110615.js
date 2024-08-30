const multer = require("multer");
const path = require("path");
const Filemodel = require("../models/file");
const uploadDirectory = path.join(__dirname, "..", "/files");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use false for STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3", // Specify the TLS version
    rejectUnauthorized: false, // For testing purposes; consider removing or setting to true for production
  },
});

console.log(uploadDirectory);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  },
});
const upload = multer({
  storage: storage,
}).single("file");

const uploadFile = async (req, res) => {
  upload(req, res, async (error) => {
    console.log(req.body);
    if (error) {
      console.log(error);
      return;
    }
    // console.log(req.file);
    const newFile = new Filemodel({
      originalFilename: req.file.originalname,
      newfilename: req.file.filename,
      path: req.file.path,
    });
    const newInsertedFile = await newFile.save();
    console.log("file uploaded successfully");

    res.json({
      success: true,
      message: "File uploaded successfully",
      fileId: newInsertedFile._id,
    });
  });
};
const generatelink = async (req, res) => {
  try {
    const fileId = req.params.uuid;
    console.log(fileId);
    const file = await Filemodel.findById(fileId);
    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }
    console.log(file);
    res.json({
      success: true,
      message: "link generated successfully",
      link: "http://localhost:3000/files/download/" + fileId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const downloadFile = async (req, res) => {
  try {
    const fileId = req.params.uuid;
    console.log(fileId);
    const file = await Filemodel.findById(fileId);
    if (!file) {
      return res.end("File not found");
    }
    res.download(file.path, file.originalFilename);
  } catch (error) {
    res.end("Internal server error");
  }
};
const sendfile = async (req, res) => {
  const { fileId, shareTo } = req.body;
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"✅" <JaiHanuman@JaiSriram.com>', // sender address
      to: "kasukurthibhargav@gmail.com, kasukurthibhargav8@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: '<a href="">Link</a>', // html body
    });
  }
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
