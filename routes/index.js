const express = require('express');

const router = express.Router();

let homeController = require('../controllers/home_controllers');

router.get('/', homeController.home);

router.use('/users', require('./user'));

module.exports = router;