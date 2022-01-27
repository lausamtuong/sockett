const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
io.on("connection",(socket)=>{
    socket.on("message",(name,message)=>{
        io.emit("message",(name,message))
    })
})
app.use(cors())
