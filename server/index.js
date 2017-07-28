const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//set up passport with our client parameters
//and a callback url to redirect users back to our server
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, accessToken => {
    console.log (accessToken);
  })
);

// 'google' calls GoogleStrategy above
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);