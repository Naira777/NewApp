const mongoose = require("mongoose");

const SectionDetailsScehma = new mongoose.Schema(
  {
   
   name: String,
   
  },
  {
    collection: "SectionDetails",
  }
);

mongoose.model("SectionDetails", SectionDetailsScehma);