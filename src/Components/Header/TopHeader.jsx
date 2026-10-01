import { FaHeart } from "react-icons/fa"
import { Link } from "react-router"

const TopHeader = ({ favorites }) => {
  return (
    <div className="fixed px-4 z-50 bg-background top-0 left-0 w-full mx-auto  flex justify-between items-center h-[12vh] md:mx-10">
      <Link to="/" >
        <h1 className="font-bold md:text-4xl">Game <span className="text-primary">Finder</span></h1>
      </Link>

      <Link to="/favorites" className="flex items-center gap-2  font-bold md:text-2xl">
        <FaHeart className="fill-danger" />
        <h3>Favorites: <span className="text-primary">{favorites.length}</span></h3>
      </Link>
    </div>
  )
}

export default TopHeader 