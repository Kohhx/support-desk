const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// Import in model


// Connect to Database (Mongo)
connectDB();

// Initialize Express
const app = express();

// Initialize body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(201).json({ message: "Welcome to the Suport Desk API" });
});

// Declare Routes from routes folder
app.use("/api/users", require("./routes/userRoutes"));

// Middle ware error handler
app.use(errorHandler);


// Listen and run server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
