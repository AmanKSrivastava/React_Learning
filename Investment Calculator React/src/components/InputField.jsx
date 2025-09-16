import { useState } from "react";
export default function InputField({ label, onChangeHandler, currentValue }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        onChange={(event) => onChangeHandler(event.target.value)}
        value={currentValue}
      />
    </p>
  );
}
