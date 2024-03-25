import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout, selectUser } from "../redux/userSlice";
import AlertDialog from "./popup";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import AdminNavbar from "./adminheader";
import "../assets/css/sidebar.css" // Import the CSS file where activeMenuItem class is defined

const Sidebars = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const nav = useNavigate('');
  const location = useLocation();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");

  const username =
    user.user && user.user.username ? user.user.username : "guest";

  useEffect(() => {
    const pathname = location.pathname;
    setSelectedPage(pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    setShowDialog(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setShowDialog(false);
    nav("/")
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <AdminNavbar/>
      <Sidebar
        rootStyles={{
          "& .ps-sidebar-container": {
            top:"90px",
            height:"450px",
            backgroundColor: "#FFFFF !important",
            position:"fixed",
            width:"250px",
            color:"black"
          },
          "& .ps-menuitem-root": {
            color: "#000 !important",
          },
          "& .ps-menuitem-root:hover": {
            color: "#e50914 !important",
          },
          " .ps-menu-button":{
            "&:hover":
            {
                backgroundColor:"#ffddd8 !important",
                border:"0.1em solid  #b30006 !important"
            }
          }
        }}
      >
        <Menu>
          <MenuItem component={<Link to="/" />} active={selectedPage === "/"} className={selectedPage === "/" ? "activeMenuItem" : ""}>
           Hi, {username}
          </MenuItem>
          <MenuItem component={<Link to="/admin/dashboard" />} active={selectedPage === "/admin/dashboard"} className={selectedPage === "/admin/dashboard" ? "activeMenuItem" : ""}>
            Dashboard
          </MenuItem>
          <MenuItem component={<Link to="/admin/userinfor" />} active={selectedPage === "/admin/userinfor"} className={selectedPage === "/admin/userinfor" ? "activeMenuItem" : ""}>User Information</MenuItem>
          <MenuItem component={<Link to="/admin/addProduct" />} active={selectedPage === "/admin/addProduct"} className={selectedPage === "/admin/addProduct" ? "activeMenuItem" : ""}> Add Product</MenuItem>
          <MenuItem component={<Link to="/admin/addCategory" />} active={selectedPage === "/admin/addCategory"} className={selectedPage === "/admin/addCategory" ? "activeMenuItem" : ""}>Add Category</MenuItem>
          <MenuItem onClick={handleLogout} className={selectedPage === "/logout" ? "activeMenuItem" : ""}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <AlertDialog
      open={showDialog}
      message="Are you sure you want to logout?"
      handleConfirm={handleConfirmLogout}
      handleClose={handleCloseDialog}
    />
    </>
  );
};
export default Sidebars;
