const mongoose = require("mongoose");

const ProductDetailsScehma = new mongoose.Schema(
  {
   image: String,
   translations: Array,
   categoryId: String,
   
  },
  {
    collection: "ProductDetails",
  }
);

mongoose.model("ProductDetails", ProductDetailsScehma);

// const mongoose = require("mongoose");

// const ProductDetailsScehma = new mongoose.Schema(
//   {
//    image: String,
//    name: String,
//    desc: String,
//    sections: [{type: mongoose.Schema.Types.ObjectId, ref: 'SectionDetails'}],
//   },
//   {
//     collection: "ProductDetails",
//   }
// );

// mongoose.model("ProductDetails", ProductDetailsScehma);