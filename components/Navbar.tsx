import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="max-w-6xl md:mx-auto px-3 md:px-5 flex flex-col gap-3 md:flex-row bg-slate-700 text-white py-3 items-center justify-between ">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">Music Sansar</h1>
        <h3 className="text-md font-normal"> Sansar for music lovers </h3>
      </div>
      <div className="w-2/3">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
