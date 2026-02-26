//import React, { useState } from "react";

//const url = "https://v2.api.noroff.dev/online-shop?search=";

type searchBarProps = {
  onClick: () => void;
};

const SearchBar = ({ onClick }: searchBarProps) => {
  return (
    <form className="relative w-full sm:px-8 md:px-12">
      <input
        id="searchbar-input"
        type="text"
        placeholder="Search for products"
        aria-label="Search Bar"
        onClick={onClick}
        className="bg-gray-light border-gray-medium text-gray-dark w-full rounded-sm border px-8 py-2"
      />
      <span className="iconify-[material-symbols--search] text-gray-dark absolute top-1/2 left-2 -translate-y-1/2 sm:left-10 md:left-14"></span>
    </form>
  );
};

export default SearchBar;
