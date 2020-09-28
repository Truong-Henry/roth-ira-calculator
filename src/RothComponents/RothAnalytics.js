import React, { useContext } from "react";
import { RothContext } from "./rothContext";

function RothAnalytics() {
  const { form, retirementBalance } = useContext(RothContext);
  const retirementBalanceFormatted = retirementBalance.toLocaleString("en");

  let annualContribution = form.annualContribution;
  const totalContribution = (
    (form.retirementAge - form.currentAge + 1) *
    annualContribution
  ).toLocaleString("en");

  return (
    retirementBalance > 0 && (
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="analytics-container col-lg-10">
          <h2>Analytics</h2>
          <p>
            Your retirement balance could be $
            <u>{retirementBalanceFormatted}</u>
            <br />
            Monthly Contribution: ${(annualContribution / 12).toFixed(2)}
            <br />
            Weekly Contribution: ${(annualContribution / 52).toFixed(2)}
            <br />
            Daily Contribution: ${(annualContribution / 365).toFixed(2)}
            <br />
            Total Contribution: ${totalContribution}
          </p>
        </div>
        <div className="col-lg-1"></div>
      </div>
    )
  );
}

export default RothAnalytics;
