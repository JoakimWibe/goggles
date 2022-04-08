import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchContext } from "../context/SearchContextProvider";

const SearchBar = () => {
  const [text, setText] = useState("");
  const { setSearchWord } = useSearchContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchWord(text);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center md:mt-0 mt-5">
      <input onChange={(e) => setText(e.target.value)} value={text} type="text" className="rounded px-1" placeholder="Search" />
      <button type="submit">
        <BiSearchAlt className="text-white text-2xl ml-2" />
      </button>
    </form>
  );
};

export default SearchBar;
