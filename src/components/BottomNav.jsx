import React from 'react';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

function BottomNav() {
    return <footer>
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-white justify-content-between flex-nowrap flex-row">
            <div class="container space-around">
                <ul class = "navbar-nav flex-row">
                    <li class="nav-item"><a class="nav-link" href = "#"><HotelOutlinedIcon fontSize="large"/><p>Supplies</p></a></li>
                    <li class="nav-item"><a class="nav-link" href = "#"><ListAltOutlinedIcon fontSize="large"/><p>Checklists</p></a></li>
                    <li class="nav-item"><a class="nav-link" href = "#"><HomeOutlinedIcon fontSize="large"/><p>Home</p></a></li>
                    <li class="nav-item"><a class="nav-link" href = "#"><MapOutlinedIcon fontSize="large"/><p>Camps</p></a></li>
                    <li class="nav-item"><a class="nav-link" href = "#"><LocalHospitalOutlinedIcon fontSize="large"/><p>Volunteers</p></a></li>
                </ul>
            </div>
        </nav>
    </footer>
}

export default BottomNav;