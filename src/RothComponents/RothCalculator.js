import React from "react";
import RothForm from "./RothForm";
import RothGraph from "./RothGraph";

function RothCalculator() {
  return (
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="graph-container col-lg-10">
        <RothForm />
        <RothGraph />
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}

export default RothCalculator;
