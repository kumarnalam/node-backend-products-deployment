const express = require("express");
const upload = require("../middleware/upload.middleware");
const { uploadFile } = require("../controllers/upload.controller");

const uploadrouter = express.Router();

uploadrouter.post("/upload", upload.single("file"), uploadFile);

module.exports = uploadrouter;