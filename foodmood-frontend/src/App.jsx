import './App.css'
import RecipeCard from './components/RecipeCard'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeCard />} />
    </Routes>
  )
}

export default App
