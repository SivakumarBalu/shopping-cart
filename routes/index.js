var express = require('express');
var router = express.Router();


var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) 
{
  Product.find(function(err, docs){
    var ProductChunks = [];
    var chunkSize = 3;
    for (var i=0; i <= docs.length; i += chunkSize) 
    {
      ProductChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {products: ProductChunks});
  });
  
});
router.post('/', function(req, res, next){
  Product.create(req.body).then(function(product){
    res.send(product);
  }).catch(next);
});

module.exports = router;
