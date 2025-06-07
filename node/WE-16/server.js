// const http = require('http')
// const fs = require('fs')
// const {add} = require('./add.js')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

// console.log(express);

// console.log(add(2,3));
// const response = http.createServer((req, res) => {
//     return res.end('hiii')
// })

// response.listen(3000, () => console.log('server is running...'))

//CRUD=>create,read,update,delete

//create
// fs.writeFile('hello.t', 'hello mern 14', (err) => {
//     if (err) return err
//     return 'file created successfully!!!'
// })

//read
// fs.readFile('hello.txt', (err, data) => {
//     if (err)
//         return err
//     console.log(data)
// })

//update
// fs.appendFile('hello.txt', 'hello people of mern 14', (err) => {
//     if (err) {

//         console.log(err)
//         return
//     }
//     console.log('data updated successfully!!!');
// })

//delete
// fs.unlink('hello.txt',(err)=>{
//     if(err){
//         console.log('err');
//         return
//     }
//     console.log('file deleted successfully!!');
// })

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('this is a response')
})

app.listen(PORT, () => console.log(`server is running at ${PORT}`))