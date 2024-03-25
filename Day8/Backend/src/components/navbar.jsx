import React, { useEffect, useState } from 'react';
import "../assets/css/navbar.css";
import logo from "../assets/images/Rainbowbg.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logout, selectUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AlertDialog from './popup';
import { getCartTotal, emptycartIteam } from '../redux/cartSlice';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showDialog, setShowDialog] = useState(false);
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const username = user.user && user.user.username ? user.user.username : "guest";

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const handleLogout = () => {
    dispatch(emptycartIteam()); // Empty the cart on logout
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
      <div style={{ backgroundColor: "#ffddd8", zIndex: 100 }} id="navbarr">
        <img src={logo} alt="logo" id="logoimagen" />
        <p id="textnav">RAINBOW</p>
        <Link to="/"> <HomeIcon fontSize="large" id="homn"></HomeIcon></Link>
        <Link to="/cart">
          <div>
            <ShoppingCartSharpIcon fontSize="large" id="accn" />
            <div style={{ position: "absolute", right: "150px", fontSize: "20px", color: "gray", top: "45px" }}>
              ({totalQuantity})
            </div>
          </div>
        </Link>
        {user.user && user.user.username ? (
          <div>
            <ExitToAppIcon onClick={handleLogout} fontSize="large" id="cartn" />
            <PersonIcon fontSize="large" id="heartn" />
            <p id="nameusern">Hi, {username}</p>
          </div>
        ) : (
          <Link to="/login">
            <PersonIcon fontSize="large" id="heartn" />
          </Link>
        )}
      </div>
      <div className="personalisedbarr">
        <p><Link to="/hamper" id="hoveringr">PERSONALISED HAMPERS</Link></p>
        <p><Link to="/keychains" id="hoveringr">PERSONALISED KEYCHAIN</Link></p>
        <p><Link to="/choco" id="hoveringr">PERSONALISED CHOCOLATES</Link></p>
        <p><Link to="/cakes" id="hoveringr">PERSONALISED CAKES</Link></p>
        <p><Link to="/deress" id="hoveringr">PERSONALISED DRESSES</Link></p>
      </div>
      <AlertDialog
        open={showDialog}
        message="Are you sure you want to logout?"
        handleConfirm={handleConfirmLogout}
        handleClose={handleCloseDialog}
      />
    </div>
  );
}

export default Navbar;
