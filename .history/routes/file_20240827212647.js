const express = require("express");
const router = express.Router();
const fileController = require("./controller/fileController");

router.post("/api/files", fileController.uploadFile);
router.get("/files/:uuid", fileController.generateLink);
router.get("/files/download/:uuid", fileController.downloadFile);
router.post("/api/files/send", fileController.sendfile);
module.exports = router;
