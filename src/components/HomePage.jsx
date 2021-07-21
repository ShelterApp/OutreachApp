import React from "react";
import SearchBar from "./SearchBar";
import Map from "./Map";


function HomePage() {
  return (
    <div> 
        <SearchBar />
        <table id="map-table"><tr><th><Map /></th></tr></table>
    </div>
  );
}

export default HomePage;