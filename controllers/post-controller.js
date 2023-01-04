const express = require(`express`)
const router = express.Router()
const db = require(`../models`)
router.use(express.json())

router.get(`/:id`, async (req, res, next) => {
    try {
        // const foundPost = await db.Post.findById(req.params.id)
        // console.log(foundPost)
        console.log(`[${new Date().toLocaleTimeString()}] - Post ID ${req.params.id} was displayed`)
        // res.status(200).json(foundPost)
        res.status(200).json({ message: `Here is post ID ${req.params.id}`} )
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

module.exports = router