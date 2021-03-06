import React from 'react';
import {NavLink} from 'react-router-dom';

import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

function BottomNav() {
    return <footer>
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-white justify-content-between flex-nowrap flex-row">
            <div className="container space-around">
                <ul className = "navbar-nav flex-row">
                    <li className="nav-item"><NavLink to="/supplies" className="nav-link" activeClassName="nav-link--active"><HotelOutlinedIcon fontSize="large" className="nav-icon"/><p className="nav-text">Supplies</p></NavLink></li>
                    <li className="nav-item"><NavLink to="/checklists" className="nav-link" activeClassName="nav-link--active"><ListAltOutlinedIcon fontSize="large" className="nav-icon"/><p className="nav-text">Checklists</p></NavLink></li>
                    <li className="nav-item"><NavLink to="/" exact className="nav-link" activeClassName="nav-link--active"><HomeOutlinedIcon fontSize="large" className="nav-icon"/><p className="nav-text">Home</p></NavLink></li>
                    <li className="nav-item"><NavLink to="/camps" className="nav-link" activeClassName="nav-link--active"><MapOutlinedIcon fontSize="large" className="nav-icon"/><p className="nav-text">Camps</p></NavLink></li>
                    <li className="nav-item"><NavLink to="/volunteers" className="nav-link" activeClassName="nav-link--active"><LocalHospitalOutlinedIcon fontSize="large" className="nav-icon"/><p className="nav-text">Volunteers</p></NavLink></li>
                </ul>
            </div>
        </nav>
    </footer>
}

export default BottomNav;