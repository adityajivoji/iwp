// models loading the collection from the database
const Product = require("../models/product");

// Get: /products/new

exports.new = (req, res) => {
  res.render("new");
};

// Post newly formed product 
// Post: "/products

exports.afterCreate = async (req, res) => {
  try {
    //To sanitizing the post centent field
    req.body.product.body = await req.sanitize(req.body.product.body);
    //create product
    const newProduct = await Product.create(req.body.product);
    res.redirect("/products");
  } catch {
    res.render("new");
  }
};
