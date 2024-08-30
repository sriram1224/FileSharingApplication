const mongoose = require("mongoose");
const path = require("path");
const fileSchema = new mongoose.Schema({
    originalFilename: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    }
});