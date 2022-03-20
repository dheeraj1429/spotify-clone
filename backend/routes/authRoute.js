const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/authControllers');

router.post('/singUp', authControllers.userSignUp);
router.post('/logIn', authControllers.userLogin);
router.post('/forgetPassword', authControllers.forgetPassword);
router.post('/reset-password', authControllers.userResetPasswordRequest);

module.exports = router;
