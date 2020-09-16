import React, { useContext } from "react";
import RothForm from "./RothForm";
import Header from "./Header";
import RothGraph from "./RothGraph";
import RothAnalytics from "./RothAnalytics";
import { RothContext } from "./rothContext";

function Roth() {
  const { retirementBalance, form } = useContext(RothContext);
  return (
    <div className="container">
      <Header />
      <div className="roth-main">
        <RothForm />
        {retirementBalance && form.expectedReturn > 0 ? (
          <RothGraph />
        ) : (
          <div className="roth-error">
            Please update the form with valid inputs
          </div>
        )}
      </div>
      <RothAnalytics />
    </div>
  );
}

export default Roth;
