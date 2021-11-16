import React from "react";
import './Checkoff.css';

const Checkoff = () => {
  return (
    <div className="text-lg">
      <label className="container">
        <input type="checkbox" />
        <span className="text">Checkbox example</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkoff;
