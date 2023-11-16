import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>
          <img className="logosteam"src="./Steamdb_icon.png" alt="logo steamdb" />
          </li>
        </NavLink>
        <NavLink to="/calculator" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>
          Calculateur
          </li>
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>
          A propos
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
