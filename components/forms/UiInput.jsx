import React from "react";

function UiInput({
  className,
  formData,
  setFromData,
  name,
  id,
  placeHolder,
  disabled = false,
  required=false,
  type,
  maxLength=100
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeHolder}
      disabled={disabled}
      maxLength={maxLength}
      className={`${className} px-2 py-1 focus:outline-none rounded-sm border border-slate-400 hover:border-l-slate-900 w-full`}
      value={formData[name]}
      onChange={(e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value });
      }}
    />
  );
}

export default UiInput;
