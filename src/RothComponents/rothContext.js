import React, { useState } from "react";
const RothContext = React.createContext();

function RothContextProvider(props) {
  const [form, setForm] = useState({
    currentAge: 18,
    retirementAge: 65,
    startingBalance: 0,
    annualContribution: 5500,
    expectedReturn: 7,
  });

  function updateForm(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  }

  function calculateRoth() {
    let total = parseInt(form.startingBalance);
    let age = parseInt(form.currentAge);
    let annualContribution = parseInt(form.annualContribution);
    let retirementData = [];
    let retirementBalance = 0;

    for (age; age <= form.retirementAge; age++) {
      total = parseFloat(
        (
          (total + annualContribution) *
          (1 + form.expectedReturn / 100)
        ).toFixed(2)
      );

      retirementData.push({
        age: age,
        total: total,
      });
      retirementBalance = total;
    }
    return { retirementData, retirementBalance };
  }

  let { retirementData, retirementBalance } = calculateRoth();

  return (
    <RothContext.Provider
      value={{
        form,
        updateForm,
        rothData: retirementData,
        retirementBalance,
      }}
    >
      {props.children}
    </RothContext.Provider>
  );
}

export { RothContextProvider, RothContext };