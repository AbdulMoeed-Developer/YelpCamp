const express = require('express')
const router = express.Router();
const User = require('../models/user')
const passport = require('passport')
const users = require('../controllers/users')

router.route('/register')
      .get( users.renderRegister)
      .post( users.userRegisteration );

router.route('/login')
      .get(users.renderLogin )
      .post(passport.authenticate('local' , {failureFlash: true , failureRedirect: '/login', failureMessage: true, keepSessionInfo: true,} ) , users.login );


// user logging in

router.get('/logout', users.logout ); 
 
module.exports = router;