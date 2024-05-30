import React from "react";

export default function WeightInput({
  name,
  title,
  type,
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className="Field">
      <label htmlFor={name}>{title}</label>
      <div className="Input">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
