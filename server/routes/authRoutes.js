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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user + "not signed it")
  })

  app.get('/api/current_user', (req, res) => {
    res.send(JSON.stringify(req.user))
  })
}