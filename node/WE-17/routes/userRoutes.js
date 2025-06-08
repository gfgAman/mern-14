const express = require('express')
const { signup, createUser, readUser, findUser } = require('../controllers/userController.js')

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/create', createUser)
userRouter.get('/getusers', readUser)
userRouter.get('/getuser', findUser)

module.exports = { userRouter }