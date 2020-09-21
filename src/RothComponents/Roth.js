import React from "react";
import RothForm from "./RothForm";
import RothGraph from "./RothGraph";
import Header from "./Header";
import RothAnalytics from "./RothAnalytics";

function Roth() {
  return (
    <div className="container">
      <Header />
      <RothForm />
      <RothGraph />
      <RothAnalytics />
    </div>
  );
}

export default Roth;
