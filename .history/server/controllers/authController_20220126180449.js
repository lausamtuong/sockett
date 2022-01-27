const bcrypt = require("bcrypt")
const crypto = require("crypto")
const Streamchat = require("stream-chat")
const {connec} = require("getstream")
const signup = ()=>{
    try {
        const {fullname,username,phoneNumber,password} = req.body
        const userID = crypto.randomBytes(16).to
    } catch (error) {
        res.status(500).json(error)
    }
}
const login = ()=>{}

module.exports = {login,signup}