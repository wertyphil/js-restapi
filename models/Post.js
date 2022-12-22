const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post",  PostSchema);