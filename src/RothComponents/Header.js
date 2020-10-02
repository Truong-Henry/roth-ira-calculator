import React from "react";

function Header() {
  return (
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        <header>
          <h1>Roth IRA Calculator</h1>
          <p>
            Use the calculator below to see what your retirement balance could
            be.
          </p>
        </header>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}

export default Header;
