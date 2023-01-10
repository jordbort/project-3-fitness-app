const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        image: { type: String, required: true },
        description: { type: String, required: true },
        tags: [String],
        rating: Number,
        difficulty: Number,
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post