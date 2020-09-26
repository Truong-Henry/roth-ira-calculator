import React from "react";

function Navbar({ toggle }) {
  const localTheme = window.localStorage.getItem("theme");
  const navbarColor =
    localTheme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light";
  return (
    <nav className={"navbar navbar-expand-md " + navbarColor}>
      <a className="navbar-brand" href="/">
        Roth IRA
      </a>
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
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <span>{toggle}</span>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
