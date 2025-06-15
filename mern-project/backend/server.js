const express = require('express')
const dotenv = require('dotenv')
const { userRoutes } = require('./routes/userRoutes.js')
const { default: mongoose } = require('mongoose')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const MONGO_URL = process.env.MONGO_URL
try {

    mongoose.connect(MONGO_URL)
    console.log('DB is connected');
}
catch (err) {
    console.log(err);
}

app.use(express.json())
app.use(userRoutes)

app.listen(PORT, () => console.log(`server is running at ${PORT}`))