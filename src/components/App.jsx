import React from 'react';
import BottomNav from "./BottomNav";
import Map from "./Map";
import SearchBar from "./SearchBar";

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

function App() {
  return (
    <div>
      <SearchBar />
      <table id="map-table"><tr><th><Map /></th></tr></table>
      <BottomNav />
    </div>
  );
}

export default App;
