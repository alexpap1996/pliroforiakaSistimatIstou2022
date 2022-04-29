const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  created: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
      type:String,
      required: true,
  }
});

module.exports = mongoose.model("Article", ArticleSchema);
