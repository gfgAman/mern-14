const express = require('express')
const dotenv = require('dotenv')
const { userRoutes } = require('./routes/userRoutes.js')
const { default: mongoose } = require('mongoose')
const multerRouter = require('./routes/multer.routes.js')
// const multer = require('multer')
// const multerRouter = require('./routes/multer.routes.js')
// const upload = multer({ dest: 'uploads/' })

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

// app.post('/profile', upload.single('image'), function (req, res, next) {
//     res.send(req.file)
//     next()
// })

app.use(express.json())
app.use(userRoutes)
app.use(multerRouter)

app.listen(PORT, () => console.log(`server is running at ${PORT}`))