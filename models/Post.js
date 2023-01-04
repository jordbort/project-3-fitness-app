const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        image: {type: String, required: true},
        text: {type: String, required: true},
        tags: [String],
        performance: Number,
        difficulty: Number
    },
    { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post