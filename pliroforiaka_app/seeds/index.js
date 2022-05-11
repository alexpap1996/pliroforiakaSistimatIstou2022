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
    const { username, firstName, lastName, email, role, password } = users[i];
    const user = new User({
      username,
      firstName,
      lastName,
      email,
      role,
      image: {
        url: "https://res.cloudinary.com/dgzlym20q/image/upload/v1652174183/makeItGreen/Jim_sk0rvd.jpg",
        filename: "makeItGreen/Jim_sk0rvd",
      },
    });
    const newUser = await User.register(user, password);
    console.log(newUser);
    if (articles[j] && newUser.role === "user") {
      const { title, body, created, description } = articles[j];
      const article = new Article({
        title,
        body,
        created,
        description,
        author: newUser._id,
        image: {
          url: "https://res.cloudinary.com/dgzlym20q/image/upload/v1652174180/makeItGreen/bitcoin_maybz6.jpg",
          filename: "makeItGreen/bitcoin_maybz6",
        },
      });
      await article.save();
      console.log(article);
      j++;
      if (articles[j]) {
        const article1 = new Article({
          title: articles[j].title,
          body: articles[j].body,
          created: articles[j].created,
          description: articles[j].description,
          author: newUser._id,
          image: {
            url: "https://res.cloudinary.com/dgzlym20q/image/upload/v1652174176/makeItGreen/solar-energy_dd7zrh.png",
            filename: "makeItGreen/solar-energy_dd7zrh",
          },
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
