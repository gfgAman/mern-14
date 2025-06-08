const { users } = require("../users")


const signup = async (req, res) => {
    const { username, password, email } = req.body

    if (!username || !password || !email)
        return res.send('fill the details')

    return res.send('user signup successfully!!!')
}

const createUser = async (req, res) => {
    const { username, age, email } = req.body

    if (!username || !age || !email)
        return res.status(401).json({ message: "fill all the fields", success: false, status: 401 })

    await users.push({ username, age, email })
    return res.status(200).json({ message: 'user saved successfully', success: true, status: 200, users })

}

const readUser = async (req, res) => {
    return res.status(200).json({ message: 'users found successfully!!!', success: true, status: 200, users })
}

const findUser = async (req, res) => {
    const { username } = req.query

    if (!username)
        return res.status(401).json({ message: 'username not found', success: false, status: 401 })
    const data = await users.find(user => user.username === username)

    if (!data)
        return res.status(404).json({ message: 'user not found', success: false, status: 404 })

    return res.status(200).json({ message: 'user found', success: true, status: 200, data })
}
module.exports = { signup, createUser, readUser,findUser }