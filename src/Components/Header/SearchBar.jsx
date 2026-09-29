import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({setSearch}) {

  const [saveInput, setSaveInput] = useState('')

  function handel() {
    setSaveInput(event.target.value);
  }



  return (
    <div className="
    w-full md:w-[60vw] xl:w-[55vw] mx-auto flex items-center 
    bg-surface-light rounded-lg pl-6 gap-4 overflow-hidden
    ">
      <FaSearch className="text-text-muted " />
      <input
        className="bg-surface-light xl:py-4 py-3 rounded-lg flex-3 hover:outline-0 focus:outline-0"
        type="text"
        placeholder="Search games..."
        value={saveInput}
        onChange={handel}
        onKeyDown={(e) => {
          if(e.key == "Enter") {
            setSearch(saveInput);
          }
        }}
      />
      <button type="button" onClick={() => {
        setSearch(saveInput);
      }}
        className="bg-primary rounded-lg xl:py-4 py-3 xl:px-8 px-6 hidden md:block">Search</button>
    </div>
  );
}

export default SearchBar;
