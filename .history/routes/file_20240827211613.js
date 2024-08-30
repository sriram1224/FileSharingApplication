const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.post("/api/files", fileController.uploadFile);
router.get("/files/:uuid");
router.get("/files/download/:uuid");
router.post("/api/files/send");
module.exports = router;
