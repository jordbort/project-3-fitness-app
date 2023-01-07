const express = require(`express`)
const router = express.Router()
router.use(express.json())

// Models
const { Profile } = require(`../models`)

router.get(`/:id`, async (req, res, next) => {
    try {
        const foundProfile = await Profile.findById(req.params.id).populate('owner').exec()
        console.log(foundProfile)
        console.log(`[${new Date().toLocaleTimeString()}] - Showed profile of "${foundProfile.name}"`)
        res.status(200).json(foundProfile)
    }
    catch(err) {
        console.error(err)
        res.status(404).json({error: err.message})
        return next(err)
    }
})

router.get(`/`, async (req, res, next) => {
    try {
        console.log(`[${new Date().toLocaleTimeString()}] - Accessed the profile creation page (?)`)
        res.status(200).json({ message: `This is the profile creation page`} )
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

router.post(`/`, async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body)
        console.log(`[${new Date().toLocaleTimeString()}] - Created profile for ${newProfile.name}`)
        res.status(201).json(newProfile)
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
})

router.put(`/:id`, async (req, res) => {
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(`Updated profile ID ${req.params.id}:`, updatedProfile)
        console.log(`[${new Date().toLocaleTimeString()}] - Updated profile of "${updatedProfile.name}"`)
        res.status(200).json(updatedProfile) 
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
})

router.delete(`/:id`, async (req, res) => {
    try {
        const deletedProfile = await Profile.findByIdAndDelete(req.params.id)
        console.log(`Deleted:`, deletedProfile.name)
        console.log(`[${new Date().toLocaleTimeString()}] - Deleted profile of "${deletedProfile.name}"`)
        res.status(200).json(deletedProfile)
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = router