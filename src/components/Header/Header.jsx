import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
const Header = ({ title, totallQty }) => {
  return (
    <header>
      <div className="logo-box">
        <a href="index.html">
          <img src={logo} alt="" height="40px" width="40px" />
        </a>
        <h4 className="title-logo">{title}</h4>
      </div>
      <div className="icons">
        <div className="login">
          <i className="bi bi-box-arrow-in-right"></i>
        </div>
        <div className="cart-box">
          <i className="bi bi-bag"></i>
          <span className="totalQty">{totallQty}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
