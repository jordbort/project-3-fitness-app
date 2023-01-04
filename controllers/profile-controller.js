const express = require(`express`)
const router = express.Router()
router.use(express.json())

// Models
const {Profile} = require(`../models`)

router.get(`/:id`, async (req, res, next) => {
    try {
        // const foundProfile = await Profile.findById(req.params.id)
        // console.log(foundProfile)
        console.log(`[${new Date().toLocaleTimeString()}] - Profile ID ${req.params.id} was displayed`)
        // res.status(200).json(foundProfile)
        res.status(200).json({ message: `Here is profile ID ${req.params.id}`} )
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

router.get(`/`, async (req, res, next) => {
    try {
        console.log(`[${new Date().toLocaleTimeString()}] - Accessed the profile creation page`)
        res.status(200).json({ message: `This is the profile creation page`} )
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

module.exports = router