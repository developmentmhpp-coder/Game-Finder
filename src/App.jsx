import { useState } from 'react'
import { Route, Routes } from 'react-router'
import TopHeader from './Components/Header/TopHeader'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'


function App() {

  const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [])

  useeffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])



  return (
    <div className="container mx-auto w-full px-4 ">
      <TopHeader favorites={favorites} />

      <Routes>
        <Route path="/" element={<Home setFavorites={setFavorites} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </div>
  )
}

export default App
