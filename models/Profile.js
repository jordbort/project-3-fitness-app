const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        bio: String,
        age: Number,
        location: String
    },
    { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile