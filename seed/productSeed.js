var Product = require('../models/Product');
var mongoose = require('mongoose');


mongoose.connect('mongodb://siva:celeron@ds155150.mlab.com:55150/shopping');

var products = [new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
new Product ({
    imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "This is the best Gothic video game ever!!!",
    price: 10
}),
];

/*var done = 0;
/for (var i = 0; i <= products.length; i++)
{
    products[i].save(function(err, result){
        done++;
        if(done === products.length) exit();
    });
}

function exit(){
mongoose.disconnect();
}*/

products.forEach(function(item){
    products[item].save()
}, function(){
    mongoose.disconnect();
});

