import CartList from "../Components/Main/CartList";
import Filter from "../Components/Main/Filter";
import { games } from "../../public/data/game";
import { useState } from "react";
import SideBar from "../Components/Header/SideBar";

function Home({ favorites, setFavorites }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  let game =
    filter === "all" ? games : games.filter((el) => el.genre === filter);
  game = search === "" ? game : game.filter((el) => el.name.includes(search));

  return (
    <div>
      <SideBar setSearch={setSearch} />
      <Filter setFilter={setFilter} />
      <CartList game={game} setFavorites={setFavorites} favorites={favorites} />
    </div>
  );
}

export default Home;
