// models loading the collection from the database
const Product = require("../models/product");

//Get: /products/:id/show
// show product page

exports.show = (req, res)=> {

Product.find(Product.findById(req.params.id,(err,foundProduct)=>{
    if(err){
        res.redirect("/products")
    }
    else{
    res.render("show", { product: foundProduct });
    }

}))}

// Post review on Product page
// Post: /products/:id/reviews

exports.review = async(req, res) => {
    try{
        const product = await  Product.findById(req.params.id);
    product.reviews.unshift(req.body.review);
  
        product.save();
        res.redirect(`/products/${product._id}/show`);
    }
    catch(err){
        res.redirect(`/products/${product._id}/show`);

    }
}