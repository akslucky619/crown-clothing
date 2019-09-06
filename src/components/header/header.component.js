import React from "react";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from './crown.svg'

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      {/* <Logo className="logo" /> */}
      HOME
    </Link>
    <div className="options">
      <Link className="options" to="/shop">
        SHOP
      </Link>
      <Link className="options" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
