import CartList from '../Components/Main/CartList'
import Filter from '../Components/Main/Filter'
import {games} from '../../public/data/game'
import { useState } from 'react'
import SideBar from '../Components/Header/SideBar';

function Home() {

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState('');




  let game = filter === 'all' ? games : games.filter((el) => el.genre === filter );
  game = search === '' ? game : game.filter((el) => el.name.includes(search));


  return (
    <div>
      <SideBar setSearch={setSearch} />
      <Filter setFilter={setFilter}/>
      <CartList game={game} />
    </div>
  )
}

export default Home