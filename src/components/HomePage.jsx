import React from "react";
import SearchBar from "./SearchBar";
import Map from "./Map";


function HomePage() {
  return (
    <div> 
        <SearchBar />
        <table id="map-table"><tbody><tr><th><Map /></th></tr></tbody></table>
    </div>
  );
}

export default HomePage;