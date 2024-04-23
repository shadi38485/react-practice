import React from 'react'
import logo from "../assets/images/logo.png"

const Header = ({title}) => {

  return (
    <div>
      <div className="logo-box">
        <a href="index.html">
         
          <img src={logo} alt="" height="40px" width="40px" />
        </a>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Header