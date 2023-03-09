import React from "react";
import logo from "../../images/icons/logo.svg";

const Logo = () => {
  return (
    <a href="#home">
      <div>
        <img src={logo} alt="logo" />
      </div>
    </a>
  );
};

export default Logo;
