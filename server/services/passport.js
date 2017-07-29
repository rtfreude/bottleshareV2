const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const User = mongoose.model('users');

//add identifying info to cookie, take id and turn into user model
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//pull id out and turn back to user
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then( user => {
      done(null, user);
    })
});
//set up passport with our client parameters
//and a callback url to redirect users back to our server

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
      if (existingUser) {
        done(null, existingUser)
      } else {
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user))
      }
    })
  })
);