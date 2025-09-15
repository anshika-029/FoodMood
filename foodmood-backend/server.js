const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Recipe = require("./models/Recipe")

const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(cors())
app.use(express.json())

// mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

// API to get all recipes
app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API to get a single recipe by ID
app.get('/api/recipe/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Basic test route
app.get('/', (req, res) => {
    res.send('FoodMood Backend is running successfully')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
