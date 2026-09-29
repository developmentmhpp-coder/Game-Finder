import { FaStar } from "react-icons/fa";

function CartList({ game }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-10 ">
      {game.map((el, index) => (
        <div key={index} className="p-3 border border-surface-light bg-surface rounded-xl">
          <img src={el.image} alt="img" className="w-full mb-4 h-50" />
          <h3 className="mb-3 font-bold">{el.name}</h3>
          <p className="mb-2 p-2 bg-danger w-fit rounded-2xl">{el.genre}</p>
          <p className="mb-2 flex items-center gap-1.5 ">
            {" "}
            <FaStar className="fill-warning" /> {el.rating}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CartList;
