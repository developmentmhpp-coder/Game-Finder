import { useState } from 'react'
import SideBar from './Components/Header/SideBar'
import TopHeader from './Components/Header/TopHeader'
import Home from './Pages/Home'


function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="container mx-auto w-full px-4 ">
      <TopHeader />
      <SideBar setSearch={setSearch} />

      <Home search={search} />

    </div>
  )
}

export default App
