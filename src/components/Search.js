import React from "react";

function Search({searchTerm, handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
