//5 models loading the collection from the database
const Product = require("../models/product");


//5 Get: /products/all"
//2 All products

exports.all = async (req, res) => {
    Product.find({}, (err, product) => {
      if (err) {
        console.log(`ERROR!!!! ${err}`);
      } else {
        res.render("all", { products: product });
      }
    });
  }


//5 get /products/sortByAscPrice
//3 sort by ascending

  exports.sortasc =  async (req, res) => {
    try {
      const price = await Product.find({}).sort({ price: 1 });
      res.render("all", { products: price });
    } catch (err) {
      res.status(500).send({ message: err.message || "Error occured" });
    }
  }

//5 get "/products/sortByDesPrice"
//3 sort by descending

exports.sortdes =  async (req, res) => {
    try {
      const price = await Product.find({}).sort({ price: -1 });
      res.render("all", { products: price });
    } catch (err) {
      res.status(500).send({ message: err.message || "Error occured" });
    }
  }

//5 get /products/:category/category
//2 find by category

exports.category = async (req, res) => {
    try{
        const foundProducts =  await Product.find({ category: req.params.category });
        res.render("all", { products: foundProducts });
    }
    catch(err) {
        res.redirect("/products");
      } 
  }

//5 get /products/:brand/brand
//2 find by brand

exports.brand =  async(req, res) => {
     try{
        const foundProducts = await Product.find({ brand: req.params.brand });
        res.render("all", { products: foundProducts });

     }
     catch(err){ 
        res.redirect("/products");

     }
    
  }