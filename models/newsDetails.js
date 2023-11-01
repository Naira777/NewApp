const mongoose = require("mongoose");

const NewsDetailsScehma = new mongoose.Schema(
  {
   image: String,
   translations: Array,
   
  }
);

mongoose.model("NewsDetails", NewsDetailsScehma);