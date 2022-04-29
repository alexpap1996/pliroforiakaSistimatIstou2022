module.exports.isLoggedIn = (req, res, next) => {
  console.log("test LoggedIn");
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    console.log("Must be signed in");
    return res.redirect("/login");
  }
  next();
};

