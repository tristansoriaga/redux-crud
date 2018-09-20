import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink exact activeClassName="current" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/create-list">
            Create List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
