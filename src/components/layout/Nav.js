import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiSteampunkGoggles } from "react-icons/gi";
import SearchBar from "../SearchBar";

const Nav = () => {
  return (
    <>
      <nav className="w-full flex flex-col">
        <div className="p-5 flex md:flex-row flex-col items-center md:justify-between bg-blue-900 w-full">
          <Link onClick={() => window.location.reload()} className="text-white text-2xl md:text-3xl font-bold flex items-center" to="/">
            Goggles
            <GiSteampunkGoggles className="ml-2 mt-1 text-3xl" />
          </Link>
          <SearchBar />
        </div>

        <div className="text-blue-900 p-5 text-center text-xl md:text-left bg-white shadow">
          <NavLink className="mr-5" to="/search">
            Search
          </NavLink>
          <NavLink className="mr-5" to="/image">
            Images
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
