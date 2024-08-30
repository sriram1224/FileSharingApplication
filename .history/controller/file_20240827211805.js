const uploadFile = async (req, res) => {
  res.json({
    success: true,
    message: "File uploaded successfully",
  });
};
const generatelink = async () => {};
const downloadFile = async () => {};
const sendfile = async () => {};
const fileController = {
  uploadFile,
  generatelink,
  downloadFile,
  sendfile,
};
module.exports = fileController;
