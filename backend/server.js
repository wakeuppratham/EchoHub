const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

app.user(notFound)
app.user(errorHandler)

//using port number from .env file
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server added on PORT ${PORT}`));
