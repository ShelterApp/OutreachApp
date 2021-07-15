import React from 'react';
import BottomNav from "./BottomNav";
import SearchBar from "./SearchBar"

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

function App() {
  return (
    <div>
      <SearchBar />
      <BottomNav />
    </div>
  );
}

export default App;
