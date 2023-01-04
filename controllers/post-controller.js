const express = require(`express`)
const router = express.Router()
router.use(express.json())

// Models
const {Post} = require(`../models`)

router.get(`/:id`, async (req, res, next) => {
    try {
        // const foundPost = await Post.findById(req.params.id)
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

router.get(`/`, async (req, res, next) => {
    try {
        console.log(`[${new Date().toLocaleTimeString()}] - Accessed the post creation page`)
        res.status(200).json({message: `This is the post creation page`})
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

router.post(`/create`, async (req, res) => {
    try {
        // const newPost = await Post.create(req.body)
        // console.log(`Added:`, newPost.name)
        console.log(req.body)
        console.log(`[${new Date().toLocaleTimeString()}] - "Created" a "post"`)
        // res.status(201).json(newPost)
        res.status(201).json({message: `You 'created' a post!`})
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = router