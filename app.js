const express = require('express')
const config = require('config')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const PORT = config.get('port') || 5000
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));




async function start(){

try{
await mongoose.connect(process.env.MONGO_URI,{

    useNewUrlParser: true,
  
})
}
catch (e){
console.log(e.message)
process.exit()
}

}

start()

//////////////////////////////
//importing schema
require("./models/imageDetails");
const imageModel = require("./models/imageDetails");

// app.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });



//////////////////////////////////////////////////////////////



//importing schema
require("./models/newsDetails");
const News = mongoose.model("NewsDetails");

require("./models/imageDetails");
const Images = mongoose.model("ImageDetails");

require("./models/productDetails");
const Products = mongoose.model("ProductDetails");





app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});


//////////////////////////////////////////////////////////////


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/src/images' );
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});


const upload = multer({ storage: storage });




app.post("/upload-image", upload.single("image"), async (req, res) => {

  const imageName = req.file.filename;

  try {
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.post("/upload-product", upload.single("product"), async (req, res) => {
    

   const imageName = req.file?.filename;
   const categoryId = req.body.categoryId;


   const nameEn = req.body.nameEn;
   const descEn = req.body.descEn;

   const nameRu = req.body.nameRu;
   const descRu = req.body.descRu;

   const nameGe = req.body.nameGe;
   const descGe = req.body.descGe;
   const arr = [

          {
             name: nameRu,
             desc: descRu,

         },

       {
           name: nameEn,
           desc: descEn,

         },
         {
             name: nameGe,
             desc: descGe,

      },

   ]





   

  try {
    await Products.create({ image: imageName, translations: arr, categoryId: categoryId });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

// app.put("/upload-product/:id",  async (req, res) => {

  
//     try {
//       await Products.findOneAndUpdate({ _id: req.params.id, {$push:{sections: req.body.sectionId}} });
//       res.json({ status: "ok" });
//     } catch (error) {
//       res.json({ status: error });
//     }
//   });

///news

app.post("/upload-news", upload.single("news"), async (req, res) => {
    
  
    const imageName = req.file.filename;
     const headeren = req.body.headeren;
     const articleen = req.body.articleen;
     const headerru = req.body.headerru;
     const articleru = req.body.articleru;
     const headerge = req.body.headerge;
     const articlege = req.body.articlege;
     const arr = [

            {
               header: headerru,
               article: articleru,

           },

         {
               header: headeren,
               article: articleen,

           },
           {
            header: headerge,
            article: articlege,

        },

     ]
  
    try {
      await News.create({ image: imageName,
        
        translations: arr   
      
      });

      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: error });
    }
  });
  

  app.get("/get-news", async (req, res) => {
    try {
      News.find({}).then((data) => {
        res.send({ status: "ok", data: data });
      });
    } catch (error) {
      res.json({ status: error });
    }
  
  });
  
  app.delete("/delete-news/:id",  async (req, res) => {
  
    const imageName = req.params.id
  
  try {
  
    await News.deleteOne({ _id: imageName });
    res.json({ status: "ok" });
  
  } catch (error) {
  res.json({ status: error });
  }
  
  })








app.get("/get-products", async (req, res) => {
  try {
    Products.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }

});

app.delete("/delete-product/:id",  async (req, res) => {

  const imageName = req.params.id

try {

  await Products.deleteOne({ _id: imageName });
  res.json({ status: "ok" });

} catch (error) {
res.json({ status: error });
}

})

app.delete("/delete-image/:id",  async (req, res) => {

      const imageName = req.params.id
    
  try {
  
      await Images.deleteOne({ _id: imageName });
      res.json({ status: "ok" });
    
  } catch (error) {
    res.json({ status: error });
  }

})



app.get("/get-image", async (req, res) => {
  
  try {
    Images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});






////nodemailer
 const transporter = nodemailer.createTransport({

  service: 'gmail',
  host: "smtp.gmail.com",  
  auth: {    
    user: 'nara.sahakyan1985@gmail.com',
    pass: 'lvkwtmfomtfpkrup',
  },
  secure: false,
tls: {
rejectUnauthorized: false
}


});


const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};  



app.post("/send", async (req, res) => {
  
 
    const data = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        // ...mailOptions,
        ...generateEmailContent(data),      
        to: 'nara.sahakyan1985@gmail.com',
        replyTo: data.email,
        text: data.message,
        subject: data.subject,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  
  // return res.status(400).json({ message: "Bad request" });


});

const __dirname1 = path.resolve()

if(process.env.NODE_ENV ==='production'){
  app.use(express.static(path.join(__dirname1,"client/build")))
  app.get('*', (req, res)=>{

    res.sendFile(path.resolve(__dirname1, 'client', 'build', 'index.html'))
  })
}else{
  app.get("/",(req,res)=>{
    res.send("API is Running Successfully")
  })
}


app.listen(process.env.PORT || 5000, () => console.log(`App has been started ${PORT}`))