import InputField from "./InputField.jsx";

export default function UserInput({ currentValue, handleChangeValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          label="INITIAL_INVESTMENT"
          currentValue={currentValue.initialInvestment}
          onChangeHandler={(val) => handleChangeValue("initialInvestment", val)}
        />
        <InputField
          label="ANNUAL_INVESTMENT"
          currentValue={currentValue.annualInvestment}
          onChangeHandler={(val) => handleChangeValue("annualInvestment", val)}
        />
      </div>

      <div className="input-group">
        <InputField
          label="EXPECTED RETURN"
          currentValue={currentValue.expectedReturn}
          onChangeHandler={(val) => handleChangeValue("expectedReturn", val)}
        />
        <InputField
          label="DURATION"
          currentValue={currentValue.duration}
          onChangeHandler={(val) => handleChangeValue("duration", val)}
        />
      </div>
    </section>
  );
}
