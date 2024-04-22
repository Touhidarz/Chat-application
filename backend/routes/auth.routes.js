const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller.js');

const router = express.Router();

// localhost:5000/api/auth/signup
router.post("/signup", signup);

// localhost:5000/api/auth/login
router.post("/login", login);

// localhost:5000/api/auth/logout
router.post("/logout", logout);

module.exports = router;
