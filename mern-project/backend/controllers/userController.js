
const { USER } = require("../models/userSchema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

let token = ''
const signup = async (req, res) => {
    try {

        const { username, email, contact, password } = req.body

        if (!username || !email || !contact || !password)
            return res.status(401).json({ message: 'fill all the fields', status: 401, success: false })


        const saltValue = 10
        const encrytedPassword = await bcrypt.hash(password, saltValue)

        // res.send(encrytedPassword)
        const user = new USER({
            username,
            email,
            contact,
            password: encrytedPassword
        })

        await user.save()

        token = await jwt.sign({ username, email, contact }, process.env.SECRET_KEY, { expiresIn: '1hr' })

        // res.send(token)

        return res.status(200).json({ message: 'User Registered Successfully!!', status: 200, success: true, user, token })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error', status: 500, success: false })
    }
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
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(200).json({ message: 'Please fill all the fields', status: 400, success: false });

        const user = await USER.findOne({ email });
        if (!user)
            return res.status(200).json({ message: 'User not found', status: 404, success: false });

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched)
            return res.status(200).json({ message: 'Incorrect password', status: 401, success: false });

        // Check if token is present in header
        let accessToken = null;
        if (req.headers.authorization?.startsWith("Bearer ")) {
            accessToken = req.headers.authorization.split(' ')[1];
        }

        let isVerified = false;

        if (accessToken) {

            try {
                jwt.verify(accessToken, process.env.SECRET_KEY);
                isVerified = true;
            } catch (err) {
                // Token is invalid or expired — issue a new refresh token
                const refreshToken = jwt.sign(
                    { email: user.email, username: user.username },
                    process.env.SECRET_KEY,
                    { expiresIn: '1hr' }
                );

                res.send(refreshToken)
            }
        }

        return res.status(200).json({
            message: 'Login successful',
            status: 200,
            success: true,
            user,
            isVerified
        });

    } catch (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ message: 'Server error', status: 500, success: false });
    }
};


const deleteUser = async (req, res) => {

    const { email } = req.query

    await USER.findOneAndDelete({ email })

    return res.status(200).json({ message: 'user deleted successfully!!', status: 200, success: true })
}

module.exports = { signup, getAllUsers, getUser, deleteUser, login }