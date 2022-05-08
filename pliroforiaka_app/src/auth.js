module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    console.log("Must be signed in");
    return res.redirect("/login", {pageName: Home});
  }
  next();
};
