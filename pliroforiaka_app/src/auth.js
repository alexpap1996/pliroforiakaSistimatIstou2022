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
  const {id} = req.params;
  const user = await User.findById(res.locals.currentUser);
  const article = await Article.findById(id); //need to get article id from react
  if (!article.author.equals(user._id)) {
    alert("You don't have permission for that!");
    return res.redirect("/articles");
  }
  next();
};

module.exports.hasLiked = async (req,res,next)=>{
  //check if user has already liked the article
}