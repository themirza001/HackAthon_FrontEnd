import React, { useState } from 'react';

const SearchBar = ({ placeholder, buttonText, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:ml-52 mt-2 md:mt-0">
      <input
        type="text"
        placeholder={"Search for Doctor"}
        value={query}
        onChange={handleChange}
        className="ml-96 w-full md:w-100 h-11 border border-gray-300 focus:outline-none focus:border-indigo-500 rounded-l-md md:rounded-l-none md:rounded-tl-md p-2 mb-2 md:mb-0 "
      />
      <button
        onClick={handleSearch}
        className="h-11 md:w-20 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-r-md md:rounded-r-none md:rounded-tr-md"
      >
        {"search"}
      </button>
    </div>
  );
};

export default SearchBar;
