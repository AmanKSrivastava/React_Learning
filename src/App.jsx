import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import DisplayResult from "./components/DisplayResult.jsx";
import { calculateInvestmentResults } from "./util/investment.js";
function App() {
  const [currentValue, setCurrentValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = currentValue.duration > 0;

  function handleChangeValue(selectedInputName, newValue) {
    setCurrentValue((prevValue) => {
      return {
        ...prevValue,
        [selectedInputName]: newValue === "" ? "" : Number(newValue),
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput
        currentValue={currentValue}
        handleChangeValue={handleChangeValue}
      />
      {isValidInput ? (
        <DisplayResult currentInputValues={currentValue} />
      ) : (
        <p className="center">Please enter duration greater than 0</p>
      )}
    </>
  );
}

export default App;
