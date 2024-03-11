import React from 'react'
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <div>
      <div class="logo-box">
        <a href="index.html">
          <img
            src={logo}
            alt=""
            height="40px"
            width="40px"
          />
        </a>
      </div>
    </div>
  );
}

export default Header