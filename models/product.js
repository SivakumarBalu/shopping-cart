var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productSchema = new schema({
    imagePath:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product',productSchema);