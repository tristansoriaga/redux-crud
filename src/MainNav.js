import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
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
        <li>
          <NavLink exact activeClassName="current" to="/edit-list">
            Edit List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
