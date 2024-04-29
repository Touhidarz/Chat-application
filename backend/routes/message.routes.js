// const express = require('express');
// const { sendMessage } = require('../controllers/message.controller.js');

// const router = express.Router();

// router.post("/send/:id", sendMessage); // Removed the space between "/send/" and ":id"

// module.exports = router;


const express = require('express');
const sendMessage = require('../controllers/message.controller.js');
const protectRoute = require('../middleware/protectRoute.js');
const getMessage = require('../controllers/message.controller.js');

const router = express.Router();

router.get("/:id",protectRoute ,getMessage);
router.post("/send/:id",protectRoute ,sendMessage);

module.exports = router;
 