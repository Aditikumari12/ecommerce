import React, { useState } from 'react';

const Search = (prop) => {
  
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {

    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const handleClick = (event) => {
    console.log("search ",search);
    prop.getData(search);
  }

  return (
    <>
    <div className="width220">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search product..."
        aria-label="Search"
        value={search}
        onChange={handleSearch}
      />
      </div>
      <button className="btn btn-outline-success" onClick={handleClick}>
        Search
      </button>
    </>
  );
};

export default Search;
