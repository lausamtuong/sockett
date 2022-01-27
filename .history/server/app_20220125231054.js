const app = require("express")()
const http = require("http").createServer(app)
const cors  = require("cors")
var server = app.listen(4000);
var io = require('socket.io').listen(server);
io.on("connection",(socket)=>{
    socket.on("message",(name,message)=>{
        io.emit("message",(name,message))
    })
})
app.use(cors())
