import React, { useState } from "react";
import "./Tumbler.css";

export const Tumbler = ({ id, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleStatus = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={toggleStatus}
      className="tumbler-button"
      style={{ width: "auto" }} // Set button width to content width
    >
      <span className="label">Add a title</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="36">
        <rect
          className="container"
          x="1"
          y="1"
          width="34"
          height="18"
          rx="4"
        ></rect>
        <rect
          className={`off ${isChecked ? "" : "active"}`}
          x="4"
          y="4"
          width="12"
          height="12"
          rx="4"
        ></rect>
        <rect
          className={`on ${isChecked ? "active" : ""}`}
          x="20"
          y="4"
          width="12"
          height="12"
          rx="4"
        ></rect>
      </svg>
      <span className={`on ${isChecked ? "active" : ""}`} aria-hidden="true">
        On
      </span>
      <span className={`off ${isChecked ? "" : "active"}`} aria-hidden="true">
        Off
      </span>
    </button>
  );
};
