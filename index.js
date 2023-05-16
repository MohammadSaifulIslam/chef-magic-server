const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require('cors')
const chefs = require('./data/chefs.json')
const foodRecipes = require('./data/recipes.json')

app.use(cors());

app.get('/', (req,res)=>{
    res.send("Welcome to Chef's Magic Server")
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.get('/chef/:id', (req, res)=>{
    const {id} = req.params;
    const specificChef = chefs.find(chef => chef.id == id);
    res.send(specificChef)
})

app.get('/chef-recipes/:id', (req, res)=>{
    const {id} = req.params;
    const filteredRecipes = foodRecipes.filter(recipes => recipes.chefId == id)
    res.send(filteredRecipes)
})

app.get('/recipe-details/:id', (req,res)=>{
    const {id} = req.params;
    const recipeDetails = foodRecipes.find(recipe => recipe.id == id);
    res.send(recipeDetails)
})
app.get('/menu', (req,res)=>{
    res.send(foodRecipes)
})

app.listen(port, ()=>{
    console.log(`chef's magic is runnig on port: ${port}`)
})