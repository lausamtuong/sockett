const app = require("express")()

const http = require("http").createServer(app)
const io = require("socket.io")(http)

io.on("connection",(socket)=>{
    socket.on("message",(name,message)=>{
        io.emit("message",(name,message))
    })
})
http.listen(PORT,()=>{
    console.log("l")
})