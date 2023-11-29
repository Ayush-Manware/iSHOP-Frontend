import React from "react";

const Currency = () => {
  return (
    <select name="currency" id="currency" className="currencyInput">
      <option value="dollar"> $ </option>
      <option value="rupees"> ₹ </option>
      <option value="euro"> € </option>
      <option value="dirham"> د.إ </option>
    </select>
  );
};

export default Currency;
