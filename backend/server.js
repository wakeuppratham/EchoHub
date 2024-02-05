const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

//using port number from .env file
const PORT = process.env.PORT || 5000;

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id == req.params.id);
  res.send(singleChat);
});

app.listen(PORT, console.log(`Server added on PORT ${PORT}`));
