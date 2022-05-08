const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const MongoDBStore = require("connect-mongo");
const { isLoggedIn, isAdmin } = require("./auth");

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

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//routes
app.post("/testLogin", isLoggedIn, (req, res) => {
  res.send("You are logged in");
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    console.log("LOGGED IN SUCCESFULLY");
    console.log("currentUser = ", req.user._id);
    res.redirect("/");
  }
);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "greenTips2022@gmail.com",
    pass: "greentips123",
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

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "greenTips2022@gmail.com",
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

app.listen(5000, () => console.log("Server Running"));
