require("dotenv").config();
const express = require("express");
const app = express();
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Running Successfully");
});

//Routes
app.use('/api/user', userRoutes);

//error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});

// Connect to DB
const connectDB = require("./config/db");
connectDB();
