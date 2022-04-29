const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/articles/:id", (req, res) => {
  const { id } = req.params;
  return res.send(id);
  // for (let article of articles_info) {
  //   if (article.id === id) {
  //     res.render("show",{article});
  //   }
  // }
  // res.redirect("./components/views/ErrorPage.js");
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "greenTips2022@gmail.com",
    pass: "greentips123",
  },
});

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
