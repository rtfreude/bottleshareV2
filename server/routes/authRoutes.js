const passport = require('passport');

// 'google' calls GoogleStrategy above with a scope of info to get
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //user has the code now and access to our server
  app.get('/auth/google/callback', passport.authenticate('google'));
}