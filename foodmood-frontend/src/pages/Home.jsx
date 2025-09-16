import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filters, setFilters] = useState({
    taste: [],
    cookTime: [],
    foodType: [],
    cookedType: []
  });

  // Fetch recipes once
  useEffect(() => {
    axios.get("http://localhost:3000/api/recipes")
      .then(res => {
        setRecipes(res.data);
        setFilteredRecipes(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Handle checkbox change
  const handleChange = (category, value) => {
    setFilters(prev => {
      const newValues = prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value];
      return { ...prev, [category]: newValues };
    });
  };

  // Apply filters whenever filters change
  useEffect(() => {
    let filtered = [...recipes];

    if (filters.taste.length > 0) {
      filtered = filtered.filter(r => filters.taste.includes(r.taste));
    }

    if (filters.cookTime.length > 0) {
      filtered = filtered.filter(r => {
        if (r.cookTime.includes("<10")) return filters.cookTime.includes("<10 mins");
        if (r.cookTime.includes("10-30")) return filters.cookTime.includes("10-30 mins");
        if (r.cookTime.includes("30-50")) return filters.cookTime.includes("30-50 mins");
        if (r.cookTime.includes(">1")) return filters.cookTime.includes(">1 hr");
        return false;
      });
    }

    if (filters.foodType.length > 0) {
      filtered = filtered.filter(r => filters.foodType.includes(r.foodType));
    }

    if (filters.cookedType.length > 0) {
      filtered = filtered.filter(r => filters.cookedType.includes(r.cookedType));
    }

    setFilteredRecipes(filtered);
  }, [filters, recipes]);

  return (
    <div className="filter-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="main-heading">🍴 What's Your Food Mood Today? 🍴</h1>
        <p className="sub-heading">Tell us how you're feeling and we'll find the perfect recipe to match your vibe!</p>
        <div className="mood-tagline">
          <span className="tagline-text">✨ It's not just filtering - it's reading your food soul ✨</span>
        </div>
      </div>

      {/* Mood Discovery Section */}
      <div className="mood-discovery-section">
        <h2 className="discovery-heading">🎭 Let's Discover Your Food Personality</h2>
        <p className="discovery-subtitle">Answer a few quick questions about your current mood and cravings</p>
      </div>

      <div className="filters-section">
        {/* Taste */}
        <div className="filter-category taste-category">
          <div className="category-header">
            <h3 className="filter-heading">🌈 What Flavors Call to Your Soul?</h3>
            <p className="filter-subtitle">Your taste buds are speaking - what are they saying?</p>
          </div>
          <div className="checkbox-group">
            {["Sweet", "Salty", "Spicy", "Sour"].map(t => (
              <label key={t} className="checkbox-label">
                <input
                  type="checkbox"
                  onChange={() => handleChange("taste", t)}
                  checked={filters.taste.includes(t)}
                />
                <span className="checkbox-text">{t}</span>
                <span className="mood-emoji">
                  {t === "Sweet" && "🍯"} 
                  {t === "Salty" && "🧂"} 
                  {t === "Spicy" && "🌶️"} 
                  {t === "Sour" && "🍋"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Cook Time */}
        <div className="filter-category time-category">
          <div className="category-header">
            <h3 className="filter-heading">⏰ How Much Kitchen Magic Time Do You Have?</h3>
            <p className="filter-subtitle">Quick bite or culinary adventure?</p>
          </div>
          <div className="checkbox-group">
            {["<10 mins", "10-30 mins", "30-50 mins", ">1 hr"].map(t => (
              <label key={t} className="checkbox-label">
                <input
                  type="checkbox"
                  onChange={() => handleChange("cookTime", t)}
                  checked={filters.cookTime.includes(t)}
                />
                <span className="checkbox-text">{t}</span>
                <span className="mood-emoji">
                  {t === "<10 mins" && "⚡"} 
                  {t === "10-30 mins" && "🏃"} 
                  {t === "30-50 mins" && "🚶"} 
                  {t === ">1 hr" && "🧘"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Food Type */}
        <div className="filter-category foodtype-category">
          <div className="category-header">
            <h3 className="filter-heading">🌱 What's Your Body Craving?</h3>
            <p className="filter-subtitle">Listen to what your body needs today</p>
          </div>
          <div className="checkbox-group">
            {["Grain", "Vegetable", "Dairy", "Fruit"].map(f => (
              <label key={f} className="checkbox-label">
                <input
                  type="checkbox"
                  onChange={() => handleChange("foodType", f)}
                  checked={filters.foodType.includes(f)}
                />
                <span className="checkbox-text">{f}</span>
                <span className="mood-emoji">
                  {f === "Grain" && "🌾"} 
                  {f === "Vegetable" && "🥬"} 
                  {f === "Dairy" && "🥛"} 
                  {f === "Fruit" && "🍎"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Cooked Type */}
        <div className="filter-category cooking-category">
          <div className="category-header">
            <h3 className="filter-heading">🔥 What's Your Cooking Vibe?</h3>
            <p className="filter-subtitle">Fire up the kitchen or keep it cool?</p>
          </div>
          <div className="checkbox-group">
            {["Fire Cooked", "Without Fire"].map(c => (
              <label key={c} className="checkbox-label">
                <input
                  type="checkbox"
                  onChange={() => handleChange("cookedType", c)}
                  checked={filters.cookedType.includes(c)}
                />
                <span className="checkbox-text">{c}</span>
                <span className="mood-emoji">
                  {c === "Fire Cooked" && "🔥"} 
                  {c === "Without Fire" && "❄️"}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="results-transition">
        <div className="magic-divider">
          <span className="divider-text">✨ Your Perfect Matches ✨</span>
        </div>
      </div>

      <div className="results-section">
        <h2 className="recipes-heading">🍽️ Recipes That Match Your Soul</h2>
        <p className="results-subtitle">
          {filteredRecipes.length > 0 
            ? `We found ${filteredRecipes.length} amazing ${filteredRecipes.length === 1 ? 'recipe' : 'recipes'} that perfectly match your mood!`
            : "Hmm, let's try a different combination to find your perfect match!"
          }
        </p>
        
        <div className="recipes-grid">
          {filteredRecipes.map(r => (
            <div key={r._id} className="recipe-card">
              <Link to={`/recipe/${r._id}`}>
                {r.image && <img src={r.image} alt={r.title} className="recipe-image" />}
                <div className="recipe-content">
                  <h4 className="recipe-title">{r.title}</h4>
                  <p className="recipe-desc">{r.description}</p>
                  <div className="recipe-mood-indicator">
                    <span className="mood-match">Perfect mood match! 💫</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {filteredRecipes.length === 0 && (
            <div className="no-recipes">
              <div className="no-recipes-emoji">😔</div>
              <h3>Oops! No recipes match your current mood</h3>
              <p>Try adjusting your preferences or explore different combinations!</p>
              <div className="mood-suggestion">
                <span>� Maybe try being more adventurous with your choices?</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
