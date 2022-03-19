const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/authControllers');

router.post('/singUp', authControllers.userSignUp);
router.post('/logIn', authControllers.userLogin);

module.exports = router;
