import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/navbar";
import "../../assets/css/billing.css";
import { Link, useNavigate } from "react-router-dom";
import AlertDialog from "../../components/popup";
import { emptycartIteam } from "../../redux/cartSlice";

function BillingPage() {
  const { carts, totalPrice } = useSelector((state) => state.allCart);
  const user = useSelector((state) => state.user.user);
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    mobileNumber: "",
    state: "",
    district: "",
    pincode: "",
  });
  const [showInvalidNumberPopup, setShowInvalidNumberPopup] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  // Function to handle input change for shipping address fields
  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  // Function to handle checkout
  const handleCheckout = () => {
    const { address, mobileNumber, state, district, pincode } = shippingAddress;
    if (
      mobileNumber.length !== 10 ||
      !/^\d{10}$/.test(mobileNumber) ||
      !address ||
      !state ||
      !district ||
      !pincode
    ) {
      setShowInvalidNumberPopup(true);
    } else {
      dispatch(emptycartIteam()); // Empty the cart
      nav("/");
    }
  };

  // Function to close invalid number popup
  const handleCloseInvalidNumberPopup = (confirmed) => {
    if (confirmed) {
      setShowInvalidNumberPopup(false);
      nav("/billing");
    } else {
      setShowInvalidNumberPopup(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="billing-container">
        <h1>Billing Information</h1>
        {user ? (
          <div className="user-info">
            <p>Username: {user.username}</p>
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              value={shippingAddress.address}
              onChange={handleShippingAddressChange}
            />
            <input
              type="text"
              placeholder="Enter Mobile Number"
              name="mobileNumber"
              value={shippingAddress.mobileNumber}
              onChange={handleShippingAddressChange}
            />
            <input
              type="text"
              placeholder="Enter State"
              name="state"
              value={shippingAddress.state}
              onChange={handleShippingAddressChange}
            />
            <input
              type="text"
              placeholder="Enter District"
              name="district"
              value={shippingAddress.district}
              onChange={handleShippingAddressChange}
            />
            <input
              type="text"
              placeholder="Enter Pincode"
              name="pincode"
              value={shippingAddress.pincode}
              onChange={handleShippingAddressChange}
            />
          </div>
        ) : (
          <p>Please login to make payment</p>
        )}
        <div className="cart-items">
          <h2>Cart Summary</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.qnty}</td>
                  <td>&#8377; {item.qnty * item.price}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">Total Price:</td>
                <td>&#8377; {totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {user && (
          <div className="checkout-button">
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </div>
      <AlertDialog
        open={showInvalidNumberPopup}
        message="Please enter a valid 10-digit mobile number and fill in all shipping address fields."
        handleConfirm={() => handleCloseInvalidNumberPopup(true)}
        handleClose={() => handleCloseInvalidNumberPopup(false)}
      />
    </>
  );
}

export default BillingPage;
