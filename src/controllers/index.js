import express from "express";
import { fstat } from "fs";
import fs from 'fs';
const router = express.Router();
const pizzaService = require('../services/pizzaService.js')

router.get("/", (req, res) => {
  res.render("index", { pizzas: [{ name: "test" }, { name: "test2" }] });
});

router.get("/pizza", (req, res) => {
  res.render("pizza", {pizzas : pizzaService.Obj_pizzas });
});

router.post("/", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("hello", { firstname, lastname });
});

router.post("/add_pizza", (req, res) => {
  let data = pizzaService.Obj_pizzas;
  let exist = data.find(function (e) {
    return e.name == req.body.name;
  })
  if (!exist) {
    console.log("coucou");
    const newpizza = {
      id_pizza: data.length,
	    nom_pizza: req.body.name,
	    url: req.body.file,
	    compo_pizza: [req.body.sauce, ...req.body.viandes, ...req.body.fromages, ...req.body.accompagnements/*,...req.body.piquante ? ["Sauce piquante"] : []*/]
    }
    if(req.body.piquante){
      newpizza.compo_pizza.push("Sauce piquante");
    }
    console.log(data);
    data.push(newpizza)
    console.log(data);
    fs.writeFile('src/storage/pizza.json', JSON.stringify(data), (err, data) => {
      if (err){
        console.log("erreur");
      }
    })
    res.send(newpizza);
  }
  else {
    res.status(409).send("Existe déjà");
  }
})

export default router;