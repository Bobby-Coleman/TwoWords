const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const auth = require('../../middleware/auth')

//  Public Routes
router.post('/signup', usersCtrl.signup)
router.post('/login', usersCtrl.login)

// Private Routes
router.get('/user', auth, usersCtrl.user)

module.exports = router;