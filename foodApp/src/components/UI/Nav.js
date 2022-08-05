import React from "react";
import "../../styles/Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="navLinks">
        <Link style={style} to="/">
          <li>Home</li>
        </Link>
        <Link style={style} to="/Menu">
          <li>Menu</li>
        </Link>
        <Link style={style} to="/About">
          <li>About</li>
        </Link>
        <Link style={style} to="/Cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
