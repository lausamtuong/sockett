const bcrypt = require("bcrypt")
const crypto = require("crypto")
const Streamchat = require("stream-chat")
const {connect} = require("getstream")
const api_key = process.env.STREAM_API_KEY
const api_secret = process.env.STREAM_API_SECRET
const app_id = process.env.STREAM_APP_ID
const signup = async()=>{
    try {
        const {fullname,username,phoneNumber,password} = req.body
        const userID = crypto.randomBytes(16).toString("hex")
        const serverClient = connect(api_key,api_secret,app_id)
        const hashPassword = await bcrypt.hash(password,10)
        const token = serverClient.createUserToken(userID)
        res.status
    } catch (error) {
        res.status(500).json(error)
    }
}
const login = ()=>{}

module.exports = {login,signup}