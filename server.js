const express = require(`express`)
const app = express()

// Body parser middeware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Network information
const PORT = process.env.PORT || 4000
const { networkInterfaces } = require(`os`)
const network = require(`./config/network`)
require(`./config/db.connection`)

const postController = require(`./controllers/post-controller`)
app.use(`/post`, postController)

app.get(`/`, (req, res) => {
    res.redirect(`/post`)
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
    // else { // is this a bad idea? I tried browsing on my local IP and kept getting redirected to /error/
    //     res.redirect(`/error/`)
    // }
})

// server listening "footer"
app.listen(PORT, () => {
    console.log(`[${new Date().toLocaleTimeString()}] - Listening for client requests @ http://${`${network}` === `${networkInterfaces()}` ? `localhost` : `${network}`}:${PORT}`)
})