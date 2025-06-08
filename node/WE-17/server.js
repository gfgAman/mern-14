const express = require('express')
const dotenv = require('dotenv')
const { userRouter } = require('./routes/userRoutes.js')
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('working properly!!!!')
})

//application level
app.use(express.json())


// const userMiddleware = (req, res, next) => {
//     const { age } = req.body
//     if (age < 18)
//         return res.send('age must be greater than 18 years')
//     else next()
// }

//application level middleware
// app.use(userMiddleware)

//router level middleware
// app.post('/user',userMiddleware, (req, res) => {
//     const { email, password, username, age } = req.body

//     if (!email || !password || !username)
//         return res.send('fill all the fields')
//     return res.send('user saved successfully!!!')
// })
// app.post('/user', (req, res) => {
//     const { email, password, username, age } = req.body

//     if (!email || !password || !username)
//         return res.send('fill all the fields')
//     return res.send('user saved successfully!!!')
// })


// app.post('/login', (req, res) => {
//     const { name } = req.body
//     res.send(name)
// })

app.use('/user', userRouter)
app.listen(PORT, () => console.log(`server is running at ${PORT}`))