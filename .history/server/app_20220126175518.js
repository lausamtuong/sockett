const app = require("express")()
const cors = require("cors")
const PORT = process.env.PORT || 8000;
const authRout
require('dotenv').config()
app.use(cors())
app.use( require("express").json())
app.use( require("express").urlencoded())

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,() =>console.log(`Listening on ${PORT}`))
