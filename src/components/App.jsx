import React from 'react';
import { Route, Link } from 'react-router-dom';

import BottomNav from "./BottomNav";

import SuppliesPage from "./SuppliesPage";
import ChecklistsPage from "./ChecklistsPage";
import HomePage from "./HomePage";
import CampsPage from "./CampsPage";
import VolunteersPage from "./VolunteersPage";

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

function App() {
  return (
    <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/supplies" component={SuppliesPage} />
    <Route exact path="/checklists" component={ChecklistsPage} />
    <Route exact path="/camps" component={CampsPage} />
    <Route exact path="/volunteers" component={VolunteersPage} />

    <BottomNav />
    </div>
  );
}

export default App;
