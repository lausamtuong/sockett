const app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const cors  = require("cors")
io.on("connection",(socket)=>{
    socket.on("message",(name,message)=>{
        io.emit("message",(name,message))
    })
})
app.use()
http.listen(process.env.PORT||4000,()=>{
    console.log("listening on 4000")
})