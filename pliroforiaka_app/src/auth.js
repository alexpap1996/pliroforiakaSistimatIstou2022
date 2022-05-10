const User = require("../models/user");
const Article = require("../models/article");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log("Must be signed in");
    return res.redirect("/login");
  }
  next();
};

module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  if (!article.author.equals(req.user._id)) {
    alert("You don't have permission for that!");
    return res.redirect("/home");
  }
  next();
};
