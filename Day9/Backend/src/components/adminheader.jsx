import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/Rainbowbg.png";
import PersonIcon from "@mui/icons-material/Person";

import {  selectUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";



function AdminNavbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
 
  const username =
    user.user && user.user.username ? user.user.username : "guest";

  return (
    <div>
      <div style={{ backgroundColor: "#ffddd8", zIndex: 100 }} id="navbarr">
        <img src={logo} alt="logo" id="logoimagen" />
        <p id="textnav">RAINBOW</p>
        <Link to="/">
          {" "}
          <HomeIcon fontSize="large" id="homna"></HomeIcon>
        </Link>

        <div>
          <PersonIcon fontSize="large" id="heartna" />
          <p id="nameusern">Hi, {username}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
