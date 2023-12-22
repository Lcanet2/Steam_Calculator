import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" activeClassName="nav-active" className="nav">
          <li>
          <img className="logosteam"src="./Steamdb_icon.png" alt="logo steamdb" />
          </li>
        </NavLink>
        <NavLink to="/calculator" activeClassName="nav-active" className="nav">
          <li>
          Calculateur
          </li>
        </NavLink>
        <NavLink to="/about" activeClassName="nav-active" className="nav">
          <li>
          A propos
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
