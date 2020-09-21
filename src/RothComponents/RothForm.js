import React, { useContext } from "react";
import { RothContext } from "./rothContext";

function RothForm() {
  const { form, updateForm } = useContext(RothContext);
  return (
    <>
      <div className="row justify-content-center align-items-center form-container">
        <form>
          <div className="col-md-1"></div>
          <div className="form-group col-xs-12 col-md-2">
            <label htmlFor="currentAge" className="control-label">
              Current Age
            </label>
            <input
              className="form-control mb-2 mr-sm-2"
              name="currentAge"
              id="currentAge"
              type="number"
              value={form.currentAge}
              onChange={updateForm}
              min={0}
            />
          </div>
          <div className="form-group col-xs-12 col-md-2">
            <label htmlFor="retirementAge" className="control-label">
              Retirement Age
            </label>
            <input
              className="form-control mb-2 mr-sm-2"
              name="retirementAge"
              id="retirementAge"
              placeholder="Retirement Age"
              type="number"
              value={form.retirementAge}
              onChange={updateForm}
              min={form.currentAge + 1}
              max={100}
            />
          </div>
          <div className="form-group col-xs-12 col-md-2">
            <label htmlFor="startingBalance" className="control-label">
              Starting Balance
            </label>
            <input
              className="form-control mb-2 mr-sm-2"
              name="startingBalance"
              id="startingBalance"
              placeholder="Starting Balance"
              type="number"
              value={form.startingBalance}
              onChange={updateForm}
              min={0}
            />
          </div>
          <div className="form-group col-xs-12 col-md-2">
            <label htmlFor="annualContribution" className="control-label">
              Contribution
            </label>
            <input
              className="form-control mb-2 mr-sm-2"
              name="annualContribution"
              id="annualContribution"
              placeholder="Annual Contribution"
              type="number"
              value={form.annualContribution}
              onChange={updateForm}
              min={0}
              max={6000}
            />
          </div>
          <div className="form-group col-xs-12 col-md-2">
            <label htmlFor="expectedReturn" className="control-label">
              Expected Return
            </label>
            <input
              className="form-control mb-2 mr-sm-2"
              name="expectedReturn"
              id="expectedReturn"
              placeholder="Expected Return (%)"
              type="number"
              value={form.expectedReturn}
              onChange={updateForm}
              min={0}
              max={100}
            />
          </div>
          <div className="col-md-1"></div>
        </form>
      </div>
    </>
  );
}

export default RothForm;
