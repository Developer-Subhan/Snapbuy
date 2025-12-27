const User = require("../models/User");
const passport = require("passport");
module.exports.register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);

      res.status(200).json({
        success: true,
        message: "Registered & Logged in successfully",
        user: {
          username: registeredUser.username,
          email: registeredUser.email,
        },
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.logout = (req, res, next) => {
  try {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.checkAuth = (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      return res.json({
        loggedIn: true,
        user: {
          username: req.user.username,
          email: req.user.email,
        },
      });
    }
    res.json({ loggedIn: false });
  } catch (err) {
    next(err);
  }
};

module.exports.login = (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({
          success: false,
          message: info?.message || "Authentication failed",
        });
      }
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.status(200).json({
          success: true,
          message: "Logged in successfully",
          user: {
            username: user.username,
            email: user.email,
          },
        });
      });
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};
