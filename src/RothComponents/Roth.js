import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import RothCalculator from "./RothCalculator";
import RothAnalytics from "./RothAnalytics";

function Roth({ toggle }) {
  return (
    <>
      <Navbar toggle={toggle} />
      <div className="container text-center">
        <Header />
        <hr />
        <RothCalculator />
        <hr />
        <RothAnalytics />
      </div>
    </>
  );
}

export default Roth;
