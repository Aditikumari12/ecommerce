import React, { useState } from 'react';

const Search = (prop) => {
  
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {

    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const handleClick = () => {
    prop.getData(search);
  }

  return (
    <form className="d-flex" role="search" >
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search product..."
        aria-label="Search"
        value={search}
        onChange={handleSearch}
      />
      <button className="btn btn-outline-success" type="submit" onClick={handleClick}>
        Search
      </button>
    </form>
  );
};

export default Search;
