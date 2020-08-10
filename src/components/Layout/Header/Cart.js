import React from "react";
import UserDetails from "./UserDetails";
import cartIcon from "../../../assets/cart.svg";

const Cart = ({ user,cartItems}) => {
  
  return (
    <div className="cart-holder">
      <span className="cart">
        <img src={cartIcon} alt="cart icon" />
        {
          cartItems.length > 0 ? <small className="count">{cartItems.length}</small>:null
        } 
                
          </span>
          <UserDetails name={user} />
    </div>
  );
};

export default Cart;
