import React from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'
import RecipeCard from '../components/RecipeCard'

const Home = () => {
    return (
        <div>
            <Header />
            <Filter />
            <RecipeCard />
        </div>
    )
}

export default Home
