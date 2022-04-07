import React from "react";
import SwipeableTemporaryDrawer from "../Drawer/SwipeableTemporaryDrawer";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="drawer">
        <SwipeableTemporaryDrawer />
      </div>
      <img
        alt="logo"
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
      />
    </div>
  );
}

export default Navbar;
