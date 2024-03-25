import React, { useEffect, useState } from "react";
import "../../assets/css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeSingleIteams,
  addToCart,
  removeToCart,
} from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
// import Footer from "../../components/Footer"; // Import Footer component

function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.allCart);
  const nav = useNavigate();

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (itemId) => {
    dispatch(removeToCart(itemId));
  };

  const handleSingleDecrement = (item) => {
    dispatch(removeSingleIteams(item));
    dispatch(getCartTotal()); // Dispatch getCartTotal to update the total cart count
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    carts.forEach((ele) => {
      totalPrice += ele.price * ele.qnty;
    });
    setTotalPrice(totalPrice.toFixed(2));
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    carts.forEach((ele) => {
      totalQuantity += ele.qnty;
    });
    setTotalQuantity(totalQuantity);
  };

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalQuantity();
  }, [carts]);

  return (
    <>
      <Navbar/>
      <div className="cart-container">
        {carts.length === 0 ? (
          <div className="no-items">
            <h1>No items in your cart</h1>
            <h1>Add items to your cart</h1>
            <Link to="/" style={{textDecoration:"none"}}><h1>Click here to view our products</h1></Link>
          </div>
        ) : (
          <>
            <h1>Your Cart</h1>
            <div className="cart-items">
            <h3 id="cartttt">Products in your Cart: {totalQuantity}</h3>
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
                          style={{ width: "150px", height: "150px" }}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>
                        <div className="quantity-controls">
                          <button
                            onClick={
                              item.qnty <= 1
                                ? () => handleDecrement(item.id)
                                : () => handleSingleDecrement(item)
                            }
                          >
                            -
                          </button>
                          <span>{item.qnty}</span>
                          <button onClick={() => handleIncrement(item)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>&#8377; {item.qnty * item.price}</td>
                     
                    </tr>
                  ))}
                  <tr className="total1">
                    <td colSpan="5">
                      <div className="total">
                       
                        <h3 id="pricee">Total : &#8377; {totalPrice}</h3>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="final-bottom">
                <Link to="/"><button>Continue Shopping</button></Link>
                <button onClick={() => nav("/billing")}>Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
     
    </>
  );
}

export default CartPage;
