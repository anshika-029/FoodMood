import React from 'react'
import {Link} from 'react-router-dom';

const RecipeCard = () => {

    const recipes = [
        {
            id: 1,
            title: "Poha",
            description: "Rice recipy with infinite taste",
            image: "https://media.istockphoto.com/id/670526200/photo/poha-indian-snacks.jpg?s=612x612&w=0&k=20&c=iEVKSfRzmcHxPIz1fKQBNzmcRpLbseh5vjXaRVckRZA="
        },
        {
            id: 2,
            title: "Chana",
            description: "Fried chana mixed with salad",
            image: "https://media.istockphoto.com/id/1250626206/photo/black-chickpea-chaat-or-kala-chana-chat-recipe.jpg?s=612x612&w=0&k=20&c=NnYZozJvZThqeE3XngfUHhqEh30Nl1gWpNf3uw9vau4="
        },
        {
            id: 3,
            title: "Roti",
            description: "Wheat chapati fulka",
            image: "https://t3.ftcdn.net/jpg/04/02/96/42/360_F_402964244_CaWXa99d6DZ5b1zRjlsdX5gXtpcZqGWs.jpg"
        },
        {
            id: 4,
            title: "Rajma",
            description: "Brown beans with gravy",
            image: "https://t3.ftcdn.net/jpg/05/44/24/94/360_F_544249470_00SsextGVCgHitGgFZOM6E4l0A5SMy9q.jpg"
        }
    ]
    return (
        <div>
            <div>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <Link to={`/receipe/${recipe.id}`}>
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
