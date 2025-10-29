// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"

export const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search/${query}`);
      setQuery("");
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-neutral-950 text-white fixed w-full z-50 shadow-md">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🎬 Movies
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 gap-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/favorites" className="hover:text-gray-300">Favorites</Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex bg-gray-700 rounded-lg overflow-hidden">

            <InputGroup>
              <InputGroupInput placeholder="Type to search..." type="text" value={query}
              onChange={(e) => setQuery(e.target.value)}/>
              <InputGroupAddon align="inline-end w-24">
                <InputGroupButton type="submit"
              className="inset-shadow-sm inset-shadow-red-600/100 bg-red-800 hover:bg-red-700 hover:text-white px-5 py-1 h-[30px] text-white transition delay-150 duration-300 ease-in-out cursor-pointer">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            {/* <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-1 text-white bg-gray-700 outline-none w-40 focus:w-56 transition-all"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1"
            >
              Search
            </button> */}
          </form>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 flex flex-col space-y-4 px-4 py-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/favorites" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            Favorites
          </Link>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex bg-gray-700 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-1 text-white bg-gray-700 outline-none w-full"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
};
