const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

const password = require('../middleware/password');
const ratelimit = require('../middleware/limit');

router.post('/signup', password, userCtrl.signup);
router.post('/login', ratelimit.limiter, userCtrl.login);

module.exports = router;