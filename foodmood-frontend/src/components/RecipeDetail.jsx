import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

   useEffect(()=>{
    const fetchRecipe = async()=>{
        try{
            const response = await axios.get(`http://localhost:3000/api/recipe/${id}`)
            setRecipe(response.data);
        }catch(err){
            setError("Failer to fetch recipe");
        }
    };
    fetchRecipe();
   }, [id]);

    if (error) return <p>{error}</p>

    return recipe ? (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
                {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
            </ul>
            <h4>Steps:</h4>
            <ol>
                {recipe.steps.map((step, index) => <li key={index}>{step}</li>)}
            </ol>

            <p>Time taken for Cooking: {recipe.cookTime}</p>
            <p>Food Type: {recipe.foodType}</p>
            <p>Cooked Type: {recipe.cookedType}</p>
            <p>Taste:{recipe.taste}</p>
        </div>
    ) : (
        <p>Recipe not found</p>
    );
}

export default RecipeDetail;
