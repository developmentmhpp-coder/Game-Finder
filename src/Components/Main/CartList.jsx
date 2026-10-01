import Cart from "./Cart";

function CartList({ game, favorites, setFavorites }) {

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-10 ">
      {game.map((el, index) => (
        <Cart el={el} key={index} favorites={favorites} setFavorites={setFavorites} />
      ))}
    </div>
  );
}

export default CartList;
