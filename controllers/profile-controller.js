const express = require(`express`)
const router = express.Router()
router.use(express.json())

// Models
const { User } = require(`../models`)

const { handleValidateOwnership, requireToken } = require("../middleware/auth");

router.get(`/:id`, async (req, res, next) => {
    try {
        const foundProfile = await User.findById(req.params.id)
        console.log(foundProfile)
        console.log(`[${new Date().toLocaleTimeString()}] - Showed profile of "${foundProfile.username}"`)
        res.status(200).json(foundProfile)
    }
    catch (err) {
        console.error(err)
        res.status(404).json({ error: err.message })
        return next(err)
    }
})

router.get(`*`, async (req, res, next) => {
    try {
        console.log(`[${new Date().toLocaleTimeString()}] - Redirecting to the home page...`)
        res.status(302).redirect(`/`)
    }
    catch (err) {
        console.error(err)
        return next(err)
    }
})

router.post(`/`, requireToken, async (req, res) => {
    try {
        const owner = req.user._id
        console.log(owner, req.user)
        req.body.owner = owner
        const newProfile = await User.create(req.body)
        console.log(`[${new Date().toLocaleTimeString()}] - Created profile for ${newProfile.username}`)
        res.status(201).json(newProfile)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.put(`/:id`, requireToken, async (req, res) => {
    try {
        handleValidateOwnership(req, await User.findById(req.params.id))
        const updatedProfile = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(`Updated profile ID ${req.params.id}:`, updatedProfile)
        console.log(`[${new Date().toLocaleTimeString()}] - Updated profile of "${updatedProfile.username}"`)
        res.status(200).json(updatedProfile)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.delete(`/:id`, requireToken, async (req, res) => {
    try {
        handleValidateOwnership(req, await User.findById(req.params.id))
        const deletedProfile = await User.findByIdAndDelete(req.params.id)
        console.log(`Deleted:`, deletedProfile.username)
        console.log(`[${new Date().toLocaleTimeString()}] - Deleted profile of "${deletedProfile.username}"`)
        res.status(200).json(deletedProfile)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.get("/logout", requireToken, async (req, res, next) => {
    try {
        const currentUser = req.user.username
        delete req.user
        res.status(200).json({
            message: `${currentUser} currently logged out`,
            isLoggedIn: false,
            token: "",
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router