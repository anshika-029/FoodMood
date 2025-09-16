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

    if (error) return <div className="recipe-detail-container"><p>{error}</p></div>

    return recipe ? (
        <div className="recipe-detail-container">
            <Link to="/" className="back-button">← Back to Recipes</Link>
            
            <div className="recipe-detail-header">
                <h2 className="recipe-detail-title">{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
                <p className="recipe-description">{recipe.description}</p>
            </div>

            <div className="recipe-section">
                <h4>🥄 Ingredients:</h4>
                <ul>
                    {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
                </ul>
            </div>

            <div className="recipe-section">
                <h4>👩‍🍳 Cooking Steps:</h4>
                <ol>
                    {recipe.steps.map((step, index) => <li key={index}>{step}</li>)}
                </ol>
            </div>

            <div className="recipe-info-grid">
                <div className="recipe-info-item">
                    <span className="recipe-info-label">⏱️ Cook Time</span>
                    <span className="recipe-info-value">{recipe.cookTime}</span>
                </div>
                <div className="recipe-info-item">
                    <span className="recipe-info-label">🍽️ Food Type</span>
                    <span className="recipe-info-value">{recipe.foodType}</span>
                </div>
                <div className="recipe-info-item">
                    <span className="recipe-info-label">🔥 Cooking Style</span>
                    <span className="recipe-info-value">{recipe.cookedType}</span>
                </div>
                <div className="recipe-info-item">
                    <span className="recipe-info-label">😋 Taste</span>
                    <span className="recipe-info-value">{recipe.taste}</span>
                </div>
            </div>
        </div>
    ) : (
        <div className="recipe-detail-container">
            <Link to="/" className="back-button">← Back to Recipes</Link>
            <p>Recipe not found</p>
        </div>
    );
}

export default RecipeDetail;
