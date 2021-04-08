const express = require('express');
const { Strategy } = require('passport');

const router = express.Router();

const passport = require('passport');


let userController = require('../controllers/user_controller')

router.get('/profile', passport.checkAuthentication ,userController.profile);

router.get('/sign-in', userController.signIn);

router.get('/sign-up', userController.signUp);

router.post('/create', userController.create);

router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect: 'users/sign-in'}
), userController.createSession);

router.get('/sign-out', userController.destroySession);

module.exports = router;