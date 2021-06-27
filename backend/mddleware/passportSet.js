const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

require("dotenv").config({ path: "../config/.env" });

const secretOrKey = process.env.secretOrKey;
const User = require("../models/User");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      return done(null, jwt_payload);
    } catch (error) {
      console.error(error);
    }
  })
);
const isAuth = passport.authenticate("jwt", { session: false });
module.exports = isAuth;
// passport.authenticate("jwt", { session: false });
