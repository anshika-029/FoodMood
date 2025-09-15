import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeCard = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/recipes")
            .then(res => setRecipes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div>
                {recipes.map(recipe => (
                    <div key={recipe._id}>
                        <Link to={`/recipe/${recipe._id}`}>
                            <img src={recipe.image} />
                            <h4>{recipe.title}</h4>
                            <p>{recipe.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeCard
