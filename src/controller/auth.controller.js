const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/**
 * @name registerUserController
 * @description Register a new user, expect [username,email,password] in the body
 * @access Public
 */

async function registerUserController(req, res) {
    const {username, email, password} = req.body

    if(!username || !email || !password){
        return res.status(404).json({
            message: "Please provide username, email and password"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or : [{username}, {email}]
    })

    if (isUserAlreadyExists){
        return res.status(404).json({
            message: "User already exists with this username or email"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password
    })

    const token = jwt.sign(
        {id : user._id, username : user.username,},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

module.exports = {
    registerUserController
}