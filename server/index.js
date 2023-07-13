
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

// app.all('/', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
//   });
//   app.get('/', function(req, res, next) {
//     // Handle the get for this route
//   });
//   app.post('/', function(req, res, next) {
//     // Handle the post for this route
//   })

  
const server = http.createServer(app);
const io = new Server(server, {
    cors:  {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        // allowedHeaders: ["my-custom-header"],
        // credentials: true,

    },
});
io.on("connection", (socket) => {
    console.log(`User Connected:${socket.id}`);

    
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });


    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});
server.listen(3001, () => {
    console.log("SERVER RUNNING");
});

