const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    ingredients: [String],
    steps: [String],
    cookTime: String,
    foodType: String,
    cookedType: String,
    taste: String
});

module.exports = mongoose.model("Recipe", recipeSchema);
