const express = require("express");
const upload = require("../middleware/upload.middleware");
const { uploadFile } = require("../controllers/upload.controller");

const uploadrouter = express.Router();

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: upload
 *     tags: [upload]
 *     responses:
 *       200:
 *         description: File Uploaded successfully
 */


uploadrouter.post("/upload", upload.single("file"), uploadFile);

module.exports = uploadrouter;