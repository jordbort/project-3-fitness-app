const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        image: {type: String, required: true},
        description: {type: String, required: true},
        tags: [String],
        rating: Number,
        difficulty: Number,
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'Profile',
            required: true //This can prove buggy if there is already data in the database and any of those don't have an Object Id.
        }
    },
    { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post