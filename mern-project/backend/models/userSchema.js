const { default: mongoose } = require("mongoose");


const user = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true
    }

})

const USER = mongoose.model('USER', user)

module.exports.USER = USER