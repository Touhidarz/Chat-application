const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth.routes.js");

dotenv.config();

const app = express(); // Initialize Express app

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello application!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
