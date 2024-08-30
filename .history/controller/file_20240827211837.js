const uploadFile = async (req, res) => {
  res.json({
    success: true,
    message: "File uploaded successfully",
  });
};
const generatelink = async (req, res) => {
  res.json({
    success: true,
    message: "File uploaded successfully",
  });
};
const downloadFile = aasync (req, res) => {
  res.json({
    success: true,
    message: "File uploaded successfully",
  });
};
const sendfile = async (req, res) => {
  res.json({
    success: true,
    message: "File uploaded successfully",
  });
};
const fileController = {
  uploadFile,
  generatelink,
  downloadFile,
  sendfile,
};
module.exports = fileController;
