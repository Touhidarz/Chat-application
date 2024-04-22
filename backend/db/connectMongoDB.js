const mongoose = require('mongoose');
require('dotenv').config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("Error connecting MongoDB",error.message);
    }
}

module.exports = connectMongoDB;