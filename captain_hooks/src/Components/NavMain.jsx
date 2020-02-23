import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavMain.scss";

const NavMain = props => {
  return (
    <nav className="nav nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink to="/intro" className="nav-bar__link">
            Intro
          </NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink to="/class-async" className="nav-bar__link">
            Class Async
          </NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink to="/hook-async" className="nav-bar__link">
            Hook Async
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/form" className="nav-bar__link">
            Form Example
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
