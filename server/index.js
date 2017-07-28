const express = require('express');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oath20').Strategy

const app = express();

//set up passport with some parameters
passport.use(new GoogleStrategy())

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);