const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('./services/passport');
// require('./models/User');


const app = express();

// clientID: 884378461778-9m2l2gql8vq5nc64hquj8t20ovqoemam.apps.googleusercontent.com
// clientSecret: f_x-9nqPaUERw7zG-UWbc9ct

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', accessToken);
      console.log('profile:', profile);

    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

const PORT = process.env.PORT || 5000
app.listen(5000);
