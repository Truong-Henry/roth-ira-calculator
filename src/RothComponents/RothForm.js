import React, { useContext } from "react";
import { RothContext } from "./rothContext";

function RothForm() {
  const { form, updateForm } = useContext(RothContext);

  return (
    <div className="roth-form">
      <form className="form">
        <div className="form-row">
          <label>Current Age</label>
          <input
            type="number"
            name="currentAge"
            value={form.currentAge}
            onChange={updateForm}
            min={0}
          />
        </div>
        <div className="form-row">
          <label>Retirement Age</label>
          <input
            type="number"
            name="retirementAge"
            value={form.retirementAge}
            onChange={updateForm}
            min={form.currentAge + 1}
          />
        </div>
        <div className="form-row">
          <label>Starting Balance</label>
          <input
            type="number"
            name="startingBalance"
            value={form.startingBalance}
            onChange={updateForm}
            min={0}
          />
        </div>
        <div className="form-row">
          <label>Annual Contribution</label>
          <input
            type="number"
            name="annualContribution"
            value={form.annualContribution}
            onChange={updateForm}
            min={0}
          />
        </div>
        <div className="form-row">
          <label>Expected Return (%)</label>
          <input
            type="number"
            name="expectedReturn"
            value={form.expectedReturn}
            onChange={updateForm}
            min={0}
          />
        </div>
      </form>
    </div>
  );
}

export default RothForm;
