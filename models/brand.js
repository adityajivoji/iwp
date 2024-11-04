const mongoose = require('mongoose');

//MONGOOSE SCHEMA SET UP (MONGOOSE/MODEL CONFIG)

const brandSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('brand', brandSchema);