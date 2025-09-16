import './App.css'
import { Routes, Route } from 'react-router-dom'
import RecipeDetail from './pages/RecipeDetail'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  )
}

export default App
