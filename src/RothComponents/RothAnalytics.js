import React, { useContext } from "react";
import { RothContext } from "./rothContext";

function RothAnalytics() {
  const { form, retirementBalance } = useContext(RothContext);
  let annualContribution = form.annualContribution;

  const retirementBalanceFormatted = retirementBalance.toLocaleString("en");

  return (
    retirementBalance > 0 && (
      <div className="roth-analytics">
        <h2>Analytics</h2>
        <h3>
          Your retirement balance could be $<u>{retirementBalanceFormatted}</u>
          <br />
          Monthly Contribution: ${(annualContribution / 12).toFixed(2)}
          <br />
          Weekly Contribution: ${(annualContribution / 52).toFixed(2)}
          <br />
          Daily Contribution: ${(annualContribution / 365).toFixed(2)}
        </h3>
      </div>
    )
  );
}

export default RothAnalytics;
