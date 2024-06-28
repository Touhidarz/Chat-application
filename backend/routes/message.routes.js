const express = require('express');
const { sendMessage, getMessage } = require('../controllers/message.controller.js'); // Properly import the functions
const protectRoute = require('../middleware/protectRoute.js');

const router = express.Router();

// GET route to retrieve messages by ID, protected by protectRoute middleware
router.get("/:id", protectRoute, getMessage);

// POST route to send messages by ID, protected by protectRoute middleware
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
