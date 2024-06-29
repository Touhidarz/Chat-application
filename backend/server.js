const express = require('express');  // Package Import
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const authRoutes = require("./routes/auth.routes.js");  // File Imports
const messageRoutes = require("./routes/message.routes.js");  // File Imports
const userRoutes = require("./routes/user.routes.js");  // File Imports

const connectToMongoDB = require('./db/connectMongoDB.js');

const app = express(); // Initialize Express app // Variables
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000;

// dotenv.config();
dotenv.config();

app.use(express.json()); //to parse the incoming request with json(from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello application!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});
