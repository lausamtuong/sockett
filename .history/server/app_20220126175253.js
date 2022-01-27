const app = require("express")()
const cors = require("cors")
const PORT = process.env.PORT || 8000;
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,() =>console.log("Listening on &{"))
