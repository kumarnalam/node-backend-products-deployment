const { containerClient } = require("../config/azureBlob");

const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a file"
            });
        }

        const blobName = `${Date.now()}-${req.file.originalname}`;

        const blockBlobClient =
            containerClient.getBlockBlobClient(blobName);

        await blockBlobClient.uploadData(req.file.buffer, {
            blobHTTPHeaders: {
                blobContentType: req.file.mimetype
            }
        });

        res.status(201).json({
            message: "File uploaded successfully",
            fileName: blobName
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "File upload failed"
        });
    }
};

module.exports = {
    uploadFile
};