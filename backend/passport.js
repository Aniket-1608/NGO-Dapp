const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

const google_client_id = process.env.GOOGLE_CLIENT_ID;
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET;

const facebook_app_id = process.env.FACEBOOK_APP_ID;
const facebook_app_secret = process.env.FACEBOOK_APP_SECRET;

passport.use(new GoogleStrategy({
    clientID: google_client_id,
    clientSecret: google_client_secret,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new FacebookStrategy({
    clientID: facebook_app_id,
    clientSecret: facebook_app_secret,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});