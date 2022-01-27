const app = require("express")()
const http = require("http").createServer(app)
var io = require('socket.io').listen(server);
const cors  = require("cors")
var server = app.listen(4000);
io.on("connection",(socket)=>{
    socket.on("message",(name,message)=>{
        io.emit("message",(name,message))
    })
})
app.use(cors())
