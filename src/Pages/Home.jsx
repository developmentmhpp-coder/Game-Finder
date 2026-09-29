import CartList from '../Components/Main/CartList'
import Filter from '../Components/Main/Filter'
import {games} from '../../public/data/game'
import { useState } from 'react'

function Home({search}) {

  const [filter, setFilter] = useState("all");
  




  let game = filter === 'all' ? games : games.filter((el) => el.genre === filter );
  game = search === '' ? game : game.filter((el) => el.name.includes(search));


  return (
    <div>
      <Filter setFilter={setFilter}/>
      <CartList game={game} />
    </div>
  )
}

export default Home