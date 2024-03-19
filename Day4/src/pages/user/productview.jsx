import React, { useEffect, useState } from "react";
import "../../assets/css/productview.css"; // Import your CSS file
import getId from "./getid";
import { useNavigate, useParams, Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import pp from "../../assets/images/pur1.webp";
import ppp from "../../assets/images/pur2.webp";
import pppp from "../../assets/images/pur3.webp";
import logo from "../../assets/images/Rainbowbg.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import AlertDialog from "../../components/popup";
function PersonalizedDetails() {
  const { id } = useParams();
  const product = parseInt(id, 10);
  const personalizeDetails = getId(product);
  const dispatch = useDispatch();
  // const nav=useNavigate('');
  const user = useSelector(selectUser);
  if (!personalizeDetails) {
    return <div>Product not found</div>;
  }
  const username =
    user.user && user.user.username ? user.user.username : "guest";
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

  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    if (personalizeDetails.images && personalizeDetails.images.length > 0) {
      setImages(personalizeDetails.images);

      if (!slide) {
        setSlide(personalizeDetails.images[0]);
      }
    }
  }, [personalizeDetails, slide]);

  const handleClick = (index) => {
    if (images && images.length > 0) {
      setSlide(images[index]);
    }
  };

  const [showTextArea, setShowTextArea] = useState(false);
  const [showTextArea1, setShowTextArea1] = useState(false);

  const handleButtonClick = () => {
    setShowTextArea(!showTextArea);
  };
  const handleButtonClick1 = () => {
    setShowTextArea1(!showTextArea1);
  };
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <div style={{ backgroundColor: "white", zIndex: 100 }} id="navbar">
        <img src={logo} alt="logo" id="logoimage" />
        {user.user && user.user.username ? (
          <div>
            <button id="disp2" onClick={handleLogout}>
              Logout
            </button>
            <p id="nameuser">Hi, {username}</p>
            <PersonIcon fontSize="large" id="acc" />
          </div>
        ) : (
          <Link to="/login">
            <PersonIcon fontSize="large" id="acc" />
          </Link>
        )}

        <FavoriteSharpIcon fontSize="large" id="heart" />
        <ShoppingCartSharpIcon fontSize="large" id="cart" />
      </div>
      <div id="personalisedbar">
        <p>PERSONALISED GIFT</p>
        <p>PERSONALISED KEYCHAIN</p>
        <p>PERSONALISED CHOCOLATES</p>
        <p>PERSONALISED CAKES</p>
        <p>PERSONALISED DRESSES</p>
      </div>

      <div className="containerrd">
        <div className="desimgs">
          <div className="flex_row">
            {images.map((data, i) => (
              <div className="thumbnail" key={i}>
                <img
                  className={slide === data ? "clicked" : ""}
                  src={data}
                  onClick={() => handleClick(i)}
                  height="60px"
                  width="60px"
                />
              </div>
            ))}
          </div>
          <div id="main">
            <div>
              {slide ? (
                <img src={slide} width="300" height="300" />
              ) : (
                <p>Click on an image to view</p>
              )}
            </div>

    
          </div>
          <div id="perchase">
          <img src={pp} alt="pp" id="pic" />
          <img src={ppp} alt="ppp" id="pic2" />
          <img src={pppp} alt="pppp" id="pic3" />
          </div>
          <div className="content">
            <h1>{personalizeDetails.title}</h1>
            <p id="ratingss" style={{ marginLeft: "3%",border:"0.1em solid green",width:"35px",paddingLeft:"10px",backgroundColor:"green",color:"white",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>
            {personalizeDetails.rating}{" "}
            <span style={{ color: "white" }}>&#9733;</span>{" "}
            </p><p id="userr" >
              {personalizeDetails.users}{" "}
            </p>
            
            <hr id="hrr" />
            <p
              style={{
                color: "Black",
                fontSize: "35px",
                fontWeight: "bolder",
                
                marginLeft: "3%",
                marginTop:"-10px"
              }}
            >
              &#x20B9;{personalizeDetails.price}
            </p>
            <p  style={{
              color: "Gray",
              fontSize: "15px",
              fontWeight: "bolder",
              
              marginLeft: "19%",
              marginTop:"-69px"
            }}>Inclusive of all taxes</p>
            <p  style={{
              color: "black",
              fontSize: "12px",
              
              marginLeft: "3%",
              marginTop:"30px",
              marginBottom:"30px"
              }} >
            <span>*This product will be shipped using our courier partners<br/>
            **Products will be shipped within 2 days of order placement</span>
            </p>
            <div className="options">
           
                  <textarea className="personalization"
                    placeholder="Message on product/Customization..."
                    maxLength="250"
                  ></textarea>
              
            </div>
            <h4 id="color">Color<span>&#x2A;</span></h4>
            <div className='options'>
              <select name='custom'>
                <option value='Black'>Select One</option>
                <option value='Black'>Black</option>
                <option value='Black'>Blue</option>
                <option value='Black'>White</option>
              </select>
            </div>
            <button className="basket">Add to Cart</button>
          </div>
        </div>
        <AlertDialog
          open={showDialog}
          message="Are you sure you want to logout?"
          handleConfirm={handleConfirmLogout}
          handleClose={handleCloseDialog}
        />
      </div>
    </>
  );
}

export default PersonalizedDetails;

            // <h4>
            //   Color<span>&#x2A;</span>
            // </h4>
            // <div className="options">
            //   <select name="custom">
            //     <option value="Black">Select One</option>
            //     <option value="Black">Black</option>
            //     <option value="Black">Blue</option>
            //     <option value="Black">White</option>
            //   </select>
            // </div>
            // <h4>
            //   Size<span>&#x2A;</span>
            // </h4>
            // <div className="options">
            //   <select name="custom">
            //     <option value="Black">Select</option>
            //     <option value="Black">Small</option>
            //     <option value="Black">Medium</option>
            //     <option value="Black">Large</option>
            //   </select>
            // </div>