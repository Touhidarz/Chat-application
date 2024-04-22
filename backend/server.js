const express = require('express');  // Package Import
const dotenv = require('dotenv');

const authRoutes = require("./routes/auth.routes.js");  // File Imports
const connectToMongoDB = require('./db/connectMongoDB.js');

const app = express(); // Initialize Express app // Variables
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000;

// dotenv.config();
dotenv.config();

app.use(express.json()); //to parse the incoming request with json(from req.body)
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello application!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});
