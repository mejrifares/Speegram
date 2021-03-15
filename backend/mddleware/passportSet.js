const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

require("dotenv").config({ path: "../config/.env" });

const secretOrKey = process.env.secretOrKey;
const User = require("../models/user");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const { id } = jwt_payload;



    try {
      const user = await User.findById(id);


      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.error(error);
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });