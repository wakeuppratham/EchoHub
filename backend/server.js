const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound)
app.use(errorHandler)

//using port number from .env file
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server added on PORT ${PORT}`));
