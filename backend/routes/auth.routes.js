const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller.js');

const router = express.Router();

// localhost:5000/api/auth/signup
router.get("/signup", signup);

// localhost:5000/api/auth/login
router.get("/login", login);

// localhost:5000/api/auth/logout
router.get("/logout", logout);

module.exports = router;
