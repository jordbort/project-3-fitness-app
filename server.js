const express = require(`express`)
const app = express()

const cors = require(`cors`)
app.use(cors())

const morgan = require(`morgan`)
app.use(morgan(`dev`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { Post } = require(`./models`)

// Network information
require(`dotenv`).config()
const PORT = process.env.PORT || 4000
require(`./config/db.connection`)
const { networkInterfaces } = require(`os`)
const network = require(`./config/network`)

const postController = require(`./controllers/post-controller`)
app.use(`/post`, postController)
const profileController = require(`./controllers/profile-controller`)
app.use(`/profile`, profileController)
const authController = require("./controllers/auth-controller");
app.use("/auth", authController);



const { Post } = require(`./models`)

app.get(`/`, async (req, res, next) => {
    try {
        const allPosts = await Post.find({})
        console.log(`[${new Date().toLocaleTimeString()}] - Accessed the home page`)
        res.status(200).json(allPosts)
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

app.get(`/error`, (req, res) => {
    console.error(`Error 500: Internal server error 🚨🚨🚨`)
    res.status(500).send(`Error 500: Internal server error`)
})

app.use((err, req, res, next) => {
    console.error(`🚨 *** Inside error-handling middleware! *** 🚨`)
    if(err) {
        console.log(`Request:`, req)
        console.error(err.message)
        return res.status(404).send(err.message)
    }
    next()
})

app.get(`*`, (req, res, next) => {
    if(req.err) {
        res.status(404).send(`Error: ${req.err.message}`)
    }
    else {
        res.redirect(`/error/`)
    }
})

// server listening "footer"
app.listen(PORT, () => {
    console.log(`[${new Date().toLocaleTimeString()}] - Listening for client requests @ http://${`${network}` === `${networkInterfaces()}` ? `localhost` : `${network}`}:${PORT}`)
})

/*
post detail
self post creation
self post update
self post delete

profile detail
self profile update
self profile delete
*/