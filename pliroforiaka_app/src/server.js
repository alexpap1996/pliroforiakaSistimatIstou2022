if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const Article = require("../models/article");
const MongoDBStore = require("connect-mongo");
const { isLoggedIn, isAuthor } = require("./auth");
const methodOverride = require("method-override");
const { storage, cloudinary } = require("./ImageHosting");
const multer = require("multer");
const { findById } = require("../models/user");
const upload = multer({ storage, limits: { fieldSize: 5 * 1024 * 1024 } }); //5MB limit
const { ExpressError } = require("./ExpressError");
const catchError = require("./catchError");

//connect to DB
mongoose.connect("mongodb://localhost:27017/makeItGreen", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//session
const secret = "greenSecret";
const store = MongoDBStore.create({
  mongoUrl: "mongodb://localhost:27017/makeItGreen",
  secret,
  touchAfter: 24 * 60 * 60,
});
store.on("error", (err) => {
  console.log("SESSION ERROR", err);
});

const sessionConfig = {
  store,
  name: "session",
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    SameSite: "None",
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//routes
app.post(
  "/testLogin",
  isLoggedIn,
  catchError(async (req, res) => {
    const user = await User.findById(res.locals.currentUser);
    res.json(user);
  })
);

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  catchError(async (req, res) => {
    const currentUser = await User.findById(res.locals.currentUser);
    console.log("LOGGED IN SUCCESFULLY");
    console.log(currentUser);
    res.json(currentUser);
  })
);

app.post(
  "/registerUser",
  upload.single("file"),
  catchError(async (req, res) => {
    const { email, username, firstName, lastName, password } = req.body;
    const user = new User({
      email,
      username,
      firstName,
      lastName,
    });
    if (req.file) {
      user.image = { url: req.file.path, filename: req.file.filename };
    }
    await User.register(user, password);
    await user.save();
    console.log("User Created!");
    console.log(user);
    res.json(user);
    // return res.redirect("/home");
  })
);

app.delete(
  "/deleteUser",
  isLoggedIn,
  catchError(async (req, res) => {
    const user = await User.findById(res.locals.currentUser);
    console.log("User to be deleted = ", user);
    await User.findByIdAndDelete(user._id);
    return res.redirect("/home");
  })
);

app.patch(
  "/editUser",
  isLoggedIn,
  upload.single("file"),
  catchError(async (req, res) => {
    const user = await User.findById(res.locals.currentUser);
    console.log("User before edit = ", user);
    const { username, firstName, lastName, email, password } = req.body;
    const editedUser = await User.findByIdAndUpdate(
      user._id,
      {
        username,
        firstName,
        lastName,
        email,
      },
      { new: true }
    );
    if (req.file) {
      editedUser.image = { url: req.file.path, filename: req.file.filename };
    }
    await editedUser.setPassword(password);
    await editedUser.save();
    console.log("User after edit = ", editedUser);
    res.json(editedUser);
    // return res.redirect("/profile");
  })
);

app.post(
  "/logout",
  isLoggedIn,
  catchError((req, res) => {
    req.logout();
    console.log("Logged Out");
    res.redirect("/home");
  })
);

app.post(
  "/createArticle",
  isLoggedIn,
  upload.single("articleFile"),
  catchError(async (req, res) => {
    const author = res.locals.currentUser;
    const { title, body, description } = req.body;
    const article = new Article({
      title,
      body,
      description,
      author,
    });
    if (req.file) {
      article.image = { url: req.file.path, filename: req.file.filename };
    }
    await article.save();
    console.log("Article Created!");
    console.log(article);
    res.json(article);
    // return res.redirect("/articles");
  })
);

app.patch(
  "/editArticle",
  isLoggedIn,
  //need to add isAuthor middleware
  upload.single("articleFile"),
  catchError(async (req, res) => {
    const id = "627ebc7566bb44f77421fc6c"; //taken from DB for now
    const { title, body, description } = req.body;
    const article = await Article.findById(id);
    console.log("Article before edit = ", article);
    const editedArticle = await Article.findByIdAndUpdate(
      article._id,
      {
        title,
        body,
        description,
      },
      { new: true }
    );
    if (req.file) {
      editedArticle.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }
    await editedArticle.save();
    console.log("Article after edit = ", editedArticle);
    res.json(editedArticle);
    // return res.redirect("/article");
  })
);

app.delete(
  "/deleteArticle",
  isLoggedIn,
  catchError(async (req, res) => {
    //need to add isAuthor middleware
    const id = "627ebc7566bb44f77421fc6c"; //taken from DB for now
    const article = await Article.findById(id);
    console.log("Article to be deleted = ", article);
    await Article.findByIdAndDelete(article._id);
    // return res.redirect("/article");
  })
);

app.post(
  "/addLike",
  isLoggedIn,
  catchError(async (req, res) => {
    //need to add hasLiked middleware
    const id = "627ebc11e8a25062de73dd6c"; //taken from DB for now
    const article = await Article.findById(id);
    console.log("Article likes before = ", article.likeCounter);
    article.likeCounter++;
    const userId = res.locals.currentUser;
    const user = await User.findById(userId);
    article.UserLikes.push(user);
    await article.save();
    console.log("Article likes after = ", article.likeCounter);
    console.log("Users liked article = ", article.UserLikes);
    // return res.redirect("/article");
  })
);

//contact form reciever mail
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CONTACT_MAIL,
    pass: process.env.CONTACT_MAIL_PASS,
  },
});

//contact form
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const mail = {
    from: name,
    to: process.env.CONTACT_MAIL,
    subject: "Contact Form Message",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.all("*", (req, res, next) => {
  next(new ExpressError());
});

app.use((err, req, res, next) => {
  const { msg = "Unknown Error", code = 404 } = err;
  res.render("/ErrorPage")
});

app.listen(5000, () => console.log("Server Running"));
