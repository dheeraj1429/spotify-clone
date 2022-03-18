const express = require('express');
const router = express.Router();
const indexControllers = require('../controllers/indexControllers');

router.get('/', indexControllers.getHomePage);

module.exports = router;
