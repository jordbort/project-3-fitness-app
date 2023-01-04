require(`dotenv`).config()

const mongoose = require('mongoose')
const {MONGODB_URI} = process.env

mongoose.set('strictQuery', true)
mongoose.connect(MONGODB_URI)

mongoose.connection.on('connected', () => console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`))
mongoose.connection.on('error', (error) => console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connection error 😥`, error))
mongoose.connection.on('disconnected', () => console.log(`[${new Date().toLocaleTimeString()}] - MongoDB disconnected  ⚡️ 🔌 ⚡️`))