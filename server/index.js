const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
});

app.use(cors());

const PORT = process.env.PORT || 5000;

let users = {};

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("joinChat", (user) => {
    if (Object.keys(users).length >= 2) {
      socket.emit("chatFull", "The chat is full. Only two users can join.");
      return;
    }

    socket.username = user.username;

    if (!users[socket.username]) {
      users[socket.username] = { ...user, active: true };
      socket.broadcast.emit("userJoined", user);
    }

    io.emit("updateUserList", Object.values(users));
  });

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", (reason) => {
    console.log(`User disconnected. Reason: ${reason}`);

    if (users[socket.username]) {
      delete users[socket.username];
      io.emit("updateUserList", Object.values(users));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
