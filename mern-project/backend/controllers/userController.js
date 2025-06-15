
const { USER } = require("../models/userSchema")

const signup = async (req, res) => {
    const { username, email, contact, password } = req.body

    if (!username || !email || !contact || !password)
        return res.status(401).json({ message: 'fill all the fields', status: 401, success: false })

    const user = new USER({
        username,
        email,
        contact,
        password
    })

    await user.save()

    return res.status(200).json({ message: 'User Registered Successfully!!', status: 200, success: true, user })
}

const getAllUsers = async (req, res) => {
    const users = await USER.find()
    if (!users)
        return res.status(404).json({ message: 'no user registered yet!!', status: 404, success: false })

    return res.status(200).json({ message: 'Users found successfully', status: 200, success: true, users })
}

const getUser = async (req, res) => {
    const { email } = req.query
    const user = await USER.findOne({ email })
    if (!user)
        return res.status(404).json({ message: 'user not found', status: 404, success: false })

    return res.status(200).json({ message: 'Users found', status: 200, success: true, user })

}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        return res.status(401).json({ message: 'fill all the fields', status: 401, success: false })


    const user = await USER.findOne({ email })
    if (!user)
        return res.status(404).json({ message: 'user not found', status: 404, success: false })

    const isMatched = password === user.password

    if (!isMatched)
        return res.status(409).json({ message: 'incorrect password', status: 409, success: false })


    return res.status(200).json({ message: 'Login Successful', status: 200, success: true, user })



}

const updateUserData = async (req, res) => {
    const { email } = req.query
    const { password } = req.body

    // const user = await USER.findOneAndUpdate({ email }, { $set: { password: password } })

    const user = await USER.findOne({ email })

    if (!user)
        return res.status(404).json({ message: 'user not found', status: 404, success: false })

    user.password = password


    await user.save()

    return res.status(200).json({ message: 'data updated successfully', status: 200, success: true, user })
}

const deleteUser = async (req, res) => {

    const { email } = req.query

    await USER.findOneAndDelete({ email })

    return res.status(200).json({ message: 'user deleted successfully!!', status: 200, success: true })
}

module.exports = { signup, getAllUsers, getUser, updateUserData, deleteUser, login }