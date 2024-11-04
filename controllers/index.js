
// models loading the collection from the database
const Brand = require("../models/brand");
const Category = require("../models/category");
const Product = require("../models/product");

// 5 ROOT ROUTE
// 3 redirecting to products page

exports.root = (req, res) => {
  res.redirect("/products");
};


// 1 Get /products
//2 INDEX ROUTE
//3 homepage

exports.homepage =  async (req, res) => {
    try {
      const limitNumber = 6;  //to limit products by 6 in home page 
      const brand = await Brand.find({}).limit(limitNumber);  // finding brands from Brand collection
      const category = await Category.find({}).limit(limitNumber);  //finding category from Product collection
      const latest = await Product.find({}).sort({ _id: -1 }).limit(limitNumber); // latest products added recently
      const latest_apple = await Product.find({ brand: "Apple" })
        .sort({ _id: -1 })
        .limit(limitNumber);  // latest apple products
      const latest_boat = await Product.find({ brand: "Boat" })
        .sort({ _id: -1 })
        .limit(limitNumber);  // latest boat products
      const latest_bose = await Product.find({ brand: "Bose" })
        .sort({ _id: -1 })
        .limit(limitNumber);  // latest bose products
      const latest_skull = await Product.find({ brand: "Skull Candy" })
        .sort({ _id: -1 })
        .limit(limitNumber);  // latest skull_candy products
      const latest_jbl = await Product.find({ brand: "JBL" })
        .sort({ _id: -1 })
        .limit(limitNumber);   // latest jbl products
      const latest_senn = await Product.find({ brand: "Sennheiser" })
        .sort({ _id: -1 })
        .limit(limitNumber);   // latest sennheiser products
      const asc_price = await Product.find({})
        .sort({ price: 1 })
        .limit(limitNumber);   // sort products according to asc price
      const des_price = await Product.find({})
        .sort({ price: -1 })
        .limit(limitNumber);  // sort products according to des price
  
      res.render("index", {   // rendering through index page and passing params to that page
        category: category,
        brand: brand,
        latest: latest,
        apple: latest_apple,
        boat: latest_boat,
        bose: latest_bose,
        skull: latest_skull,
        jbl: latest_jbl,
        senn: latest_senn,
        asc_price: asc_price,
        des_price: des_price,
      });
    } catch (err) {
      res.status(500).send({ message: err.message || "Error occured" });  // internal server error 
    }
  };

