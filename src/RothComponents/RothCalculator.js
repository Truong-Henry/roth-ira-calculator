import React from "react";
import Header from "./Header";
import RothForm from "./RothForm";
import RothGraph from "./RothGraph";
import RothAnalytics from "./RothAnalytics";
function RothCalculator() {
  return (
    <>
      <Header />
      <hr />
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="graph-container col-lg-10">
          <RothForm />
          <RothGraph />
        </div>
        <div className="col-lg-1"></div>
      </div>
      <hr />
      <RothAnalytics />
    </>
  );
}

export default RothCalculator;
