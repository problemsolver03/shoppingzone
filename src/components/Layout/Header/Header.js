import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import SearchProducts from "./SearchProduct";
import Cart from "./Cart";


const Header = ({ user, inCart }) => {
  return (
    <div className="header-container container-fluid">
      <div className="container">
        <header className="flex">
          <div>
            <Link to="/results">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>

          <SearchProducts />
          <Cart user={user} cartItems={inCart} />
        </header>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, inCart: state.inCart };
};

export default connect(mapStateToProps)(Header);
