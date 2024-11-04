const mongoose = require('mongoose');

//MONGOOSE SCHEMA SET UP (MONGOOSE/MODEL CONFIG)

const ProductSchema = mongoose.Schema({
	brand:String,
    category:String,
    price:Number,
	body:String,
	title: String,
	image: String,    //we can use for image as "{type: String}".
	reviews: [
        {
            author:String,
            body:String,
            rating:Number,
	        created: {type: Date, default: Date.now,},

        }
        ],
	created: {type: Date, default: Date.now,},
});

module.exports = mongoose.model('Product', ProductSchema);