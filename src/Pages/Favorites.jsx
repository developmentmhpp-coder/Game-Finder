import Cart from "../Components/Main/Cart";

const Favorites = ({ favorites, setFavorites }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-10 ">
      {favorites.map((el) => (
        <Cart
          el={el}
          key={el.name}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;
