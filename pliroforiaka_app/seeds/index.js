const mongoose = require("mongoose");
const User = require("../models/user");
const Article = require("../models/article");
const users = require("./userSeeds");
const articles = require("./articleSeeds");

mongoose.connect("mongodb://localhost:27017/makeItGreen", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDb = async () => {
  await User.deleteMany({});
  await Article.deleteMany({});
  for (let i = 0, j = 0; i < users.length; i++) {
    const { username, firstName, lastName, role, password } = users[i];
    const user = new User({
      username,
      firstName,
      lastName,
      role,
    });
    const newUser = await User.register(user, password);
    console.log(newUser);
    if (articles[j] && newUser.role === "user") {
      const { title, body, imgUrl, created, description } = articles[j];
      const article = new Article({
        title,
        body,
        imgUrl,
        created,
        description,
        author: newUser._id,
      });
      await article.save();
      console.log(article);
      j++;
      if (articles[j]) {
        const article1 = new Article({
          title:  articles[j].title,
          body:  articles[j].body,
          imgUrl:  articles[j].imgUrl,
          created:  articles[j].created,
          description:  articles[j].description,
          author: newUser._id,
        });
        await article1.save();
        console.log(article1);
        j++;
      }
    }
  }
};

seedDb().then(() => {
  mongoose.connection.close();
});
