
function Filter({setFilter}) {

  const FilterWord = ["all", "Action", "Adventure", "RPG", "FPS", "Horror", "Sports", "Strategy", "Fighting", "Survival"]

  const handel = (ca) => {
    setFilter(ca)
    
  }

  return (
    <div className="flex overflow-auto gap-2 mt-20 md:mx-10">
      {FilterWord.map((el, i) => (
        <div key={i} onClick={() => {handel(el)}}  className=" rounded-3xl capitalize px-4 py-2 bg-primary hover:bg-primary-light cursor-pointer">{el}</div>
      ))}
    </div>
  )
}

export default Filter