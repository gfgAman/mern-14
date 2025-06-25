const express = require('express')
// const upload = require('../middlewares/multer.middleware.js')
const multerController = require('../controllers/multer.controller.js')
const upload = require('../middlewares/multer.middleware.js')
const multerRouter = express.Router()

multerRouter.post('/profile', upload.single('image'),multerController)

module.exports = multerRouter