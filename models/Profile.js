const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        // data goes here
    },
    { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile