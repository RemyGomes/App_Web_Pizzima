const fs = require('fs')


const pizzas = fs.readFileSync('./src/storage/pizza.json');

var Obj_pizzas = JSON.parse(pizzas);
console.log(Obj_pizzas.length);
/*
obj = JSON.stringify(pizzas);
console.log(obj);
//pizzas.forEach(pizza => console.log(pizza.nom_pizza));


fs.writeFileSync('../storage/pizza.json', pizzas);*/

module.exports.Obj_pizzas = Obj_pizzas;