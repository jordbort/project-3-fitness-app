const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        bio: String,
        age: Number,
        location: String,
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true //This can prove buggy if there is already data in the database and any of those don't have an Object Id.
        }
    },
    { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile