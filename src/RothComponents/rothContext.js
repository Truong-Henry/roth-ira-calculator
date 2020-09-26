import React, { useState } from "react";

const RothContext = React.createContext();

function RothContextProvider(props) {
  const [form, setForm] = useState({
    currentAge: 18,
    retirementAge: 65,
    startingBalance: 0,
    annualContribution: 5500,
    return: 7,
  });

  function updateForm(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function calculateRoth() {
    let total = parseInt(form.startingBalance);
    let age = parseInt(form.currentAge);
    let annualContribution = parseInt(form.annualContribution);
    let rothData = [];
    let retirementBalance = 0;
    let totalContribution = 0;

    for (age; age <= form.retirementAge; age++) {
      total = parseFloat(
        ((total + annualContribution) * (1 + form.return / 100)).toFixed(2)
      );

      totalContribution += annualContribution;

      rothData.push({
        age: age,
        total: total,
        totalContribution: totalContribution,
      });
      retirementBalance = total;
    }
    return { rothData, retirementBalance };
  }

  let { rothData, retirementBalance } = calculateRoth();

  return (
    <RothContext.Provider
      value={{
        form,
        updateForm,
        rothData,
        retirementBalance,
      }}
    >
      {props.children}
    </RothContext.Provider>
  );
}

export { RothContextProvider, RothContext };
