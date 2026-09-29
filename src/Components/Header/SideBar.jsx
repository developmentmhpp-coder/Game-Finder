import SearchBar from "./SearchBar"



const SideBar = ({setSearch}) => {
  return (
    <div className="text-center bg-[url('../../../public/bg.jpg')] bg-cover  py-8 px-3">

      <h1 className=" font-bold text-2xl md:text-4xl mb-2 " >
        Find Your Next <span className="text-primary">Game</span></h1>

      <p className=" text-[10px] md:text-sm mb-4 ">Search, explore and discover amazing games</p>


      <SearchBar setSearch={setSearch} />
    </div>
  )
}

export default SideBar