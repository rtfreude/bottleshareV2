const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedinStrategy = require('passport-linkedin').Strategy;
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
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id })
    if (existingUser) {
      return done(null, existingUser);
    }
    const user =  await new User({ googleId: profile.id }).save();
    done(null, user);
    }
  )
);

  passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'email'],
    proxy: true
  },
  async (accessToken, refreshToken, profile, cb) => {
    const existingUser = await User.findOne({ facebookId: profile.id })
    if (existingUser) {
      return cb(null, existingUser);
    }
    const user =  await new User({ facebookId: profile.id }).save();
    console.log('facebookeuser', user)
    cb(null, user);
  }
));

passport.use(new LinkedinStrategy({
    consumerKey: keys.linkedinKey,
    consumerSecret: keys.linkedinSecret,
    callbackURL: "/auth/linkedin/callback",
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ linkedinId: profile.id })
    if (existingUser) {
      return done(null, existingUser);
    }
    const user =  await new User({ linkedinId: profile.id }).save();
    done(null, user);
    }
  )
);

