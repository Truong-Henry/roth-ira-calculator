import React from "react";
import RothForm from "./RothForm";
import RothGraph from "./RothGraph";
import Header from "./Header";
import RothAnalytics from "./RothAnalytics";

function Roth() {
  return (
    <div className="container">
      <Header />
      <div className="graph-container">
        <RothForm />
        <hr />
        <RothGraph />
      </div>
      <RothAnalytics />
    </div>
  );
}

export default Roth;
