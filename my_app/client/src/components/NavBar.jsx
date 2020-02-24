import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/all-movies">All Movies</Link>
      <Link to="/toto">toto</Link>
    </nav>
  );
};

export default NavBar;
