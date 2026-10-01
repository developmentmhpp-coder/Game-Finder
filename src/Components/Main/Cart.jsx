import {  useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";



const Cart = ({el, favorites, setFavorites}) => {

  const [check, setCheck] = useState(favorites.some(fa => el.name === fa.name));




  return (
    <div
      className="relative p-3 border border-surface-light bg-surface rounded-xl"
    >
      <img src={el.image} alt="img" className="w-full mb-4 h-50" />
      <h3 className="mb-3 font-bold">{el.name}</h3>
      <p className="mb-2 p-2 bg-danger w-fit rounded-2xl">{el.genre}</p>
      <p className="mb-2 flex items-center gap-1.5 ">
        {" "}
        <FaStar className="fill-warning" /> {el.rating}
      </p>
      {!check ? (
        <FaRegHeart
          className="absolute text-2xl top-5 right-5 fill-red-700"
          onClick={() => {
            setFavorites((prev) => [...prev, el]);
            setCheck(!check);
          }}
        />
      ) : (
        <FaHeart
          className="absolute text-2xl top-5 right-5 fill-red-700"
          onClick={() => {
            setFavorites(favorites.filter((g) => g.name !== el.name));
            setCheck(!check);
          }}
        />
      )}
    </div>
  );
};

export default Cart;
