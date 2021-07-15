import React from "react";


function SearchBar(props) {
  return (
    <div> 
      <form className="search-bar">
        <input name="searchbar" type="search" placeholder="Search City Name or Zipcode" />
      </form>
    </div>
  );
}

export default SearchBar;