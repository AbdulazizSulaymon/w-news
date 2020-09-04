import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="py-5 text-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
