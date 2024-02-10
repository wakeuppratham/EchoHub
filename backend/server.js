const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use


//using port number from .env file
const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server added on PORT ${PORT}`));
