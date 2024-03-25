import React, { useState, useEffect } from "react";
import "../../assets/css/home.css";
import logo from "../../assets/images/Rainbowbg.png";
import img from "../../assets/images/image3.jpg";
import imge from "../../assets/images/image4.avif";
import Login from "../auth/login";
import AlertDialog from "../../components/popup";
import c from "../../assets/images/cusion.png";
import k from "../../assets/images/keychain.png";
import ca from "../../assets/images/calender.png";
import bo from "../../assets/images/bottles.png";
import di from "../../assets/images/digital.png";
import ch from "../../assets/images/choco.png";
import mu from "../../assets/images/mug.png";
import la from "../../assets/images/lamp.png";
import ts from "../../assets/images/tshirt.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import product from "../../assets/others/products";
import { Link, useNavigate } from "react-router-dom";
import Footers from "../../components/footer";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../../components/navbar";
function Home() {
  const nav=useNavigate('');
  const customize = (id) => {
    console.log(id);
    nav(`/product/${id}`);
  };
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showDialog, setShowDialog] = useState(false);
  const username =  user.user && user.user.username ? user.user.username : "guest";
  const handleLogout = () => {
    setShowDialog(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setShowDialog(false);
    
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

 
  return (
    <div>
  <div> <Navbar/></div>
<div id="thewhole">
      <div id="content">
        <div id="right">
          <span id="ph">Personalised Gifts</span>
          <p id="craft">Token of love and memories</p>
          <button id="shopnow2">Shop Now</button>
          <img src={img} alt="img" id="image1" />
        </div>

        <div id="left">
          <span id="photo">Photo Frame</span>
          <p id="crafted">Crafted for your special someone</p>
          <button id="shopnow">Shop Now</button>
          <img src={imge} alt="imge" id="image2" />
        </div>
      </div>
      <div id="content2">
        <div id="one">
          {" "}
          <img src={c} alt="c" id="cusion" />
          <button id="cbu">Cusion</button>
        </div>
        <div id="two">
          {" "}
          <img src={ca} alt="ca" id="calender" />
          <button id="cabu">Calender</button>
        </div>
        <div id="three">
          {" "}
          <img src={k} alt="k" id="key" />
          <button id="kbu">Key Chain</button>
        </div>
        <div id="four">
          {" "}
          <img src={bo} alt="bo" id="bottle" />
          <button id="bbu">Water Bottle</button>
        </div>
        <div id="five">
          {" "}
          <img src={ts} alt="ts" id="tshirt" />
          <button id="tbu">T-Shirt</button>
        </div>
        <div id="six">
          {" "}
          <img src={di} alt="di" id="digit" />
          <button id="dbu">Digital Art</button>
        </div>
        <div id="seven">
          {" "}
          <img src={ch} alt="ch" id="chocolate" />
          <button id="chabu">Chocolates</button>
        </div>
        <div id="eight">
          {" "}
          <img src={mu} alt="mu" id="mug" />
          <button id="mbu">Mug</button>
        </div>
        <div id="nine">
          {" "}
          <img src={la} alt="la" id="lamp" />
          <button id="lbu">Lamp</button>
        </div>
      </div>
      <p id="textr">Recommended Items</p>
      <div className="items-container">
      {product.map((product, index) => (
        <div key={index} onClick={() => customize(product.id)} className="item">
          {product.imgs && product.imgs.length > 0 && (
            <img id="imagehome" src={product.imgs[0]} alt="..." />
          )}
          <ul id="listcart">
            <li>{product.title}</li>
            <li>&#x20B9;{product.price}</li>
            <button id="cbutton">Book now</button>
            <p id="usersno">{product.users}</p>
          </ul>
        </div>
      ))}
    </div>
    
      <AlertDialog
        open={showDialog}
        message="Are you sure you want to logout?"
        handleConfirm={handleConfirmLogout}
        handleClose={handleCloseDialog}
      />
      <Footers />
      </div>
    </div>
  );
}

export default Home;
