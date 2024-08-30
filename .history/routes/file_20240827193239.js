const express = require("express");
const router = express.Router();
module.exports = router;
router.post("/api/files");
router.get("/files/:uuid");
router.get("/files/download/:uuid");
router.post("/files/send");
