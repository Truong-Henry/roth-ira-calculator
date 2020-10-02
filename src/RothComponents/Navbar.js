import React from "react";
import { Link } from "react-router-dom";

function Navbar({ darkModeToggler }) {
  const localTheme = window.localStorage.getItem("theme");
  const navbarColor =
    localTheme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light";

  return (
    <nav className={"navbar navbar-expand-md fixed-top " + navbarColor}>
      <Link className="navbar-brand link" to="/">
        Roth IRA
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <Link className="link" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="link" to="/resources">
              Resources
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <span>{darkModeToggler}</span>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
