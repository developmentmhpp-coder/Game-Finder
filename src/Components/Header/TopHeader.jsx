import { FaHeart } from "react-icons/fa"

const TopHeader = ({ favorites }) => {
  return (
    <div className="flex justify-between items-center h-[12vh] md:mx-10">
      <h1 className="font-bold md:text-4xl">Game <span className="text-primary">Finder</span></h1>
      <div className="flex items-center gap-2  font-bold md:text-2xl">
        <FaHeart className="fill-danger" />
        <h3>Favorites: <span className="text-primary">{favorites.length}</span></h3>
      </div>
    </div>
  )
}

export default TopHeader 