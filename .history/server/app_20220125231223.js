const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
io.on("connection",(socket)=>{
    socket.on("message",(name,message)=>{
        io.emit("message",(name,message))
    })
})
app.use(cors())
