import React from "react";

function UiTextAreaInput({
  className,
  formData,
  setFromData,
  name,
  id,
  placeHolder,
  disabled = false,
  required=false,
  type,
  maxLength=100,
  rows=3
}) {
  return (
    <textarea
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeHolder}
      disabled={disabled}
      rows={rows}
      maxLength={maxLength}
      className={`${className} px-2 py-1 focus:outline-none rounded-sm border border-slate-400 hover:border-l-slate-900 w-full`}
      value={formData[name]}
      onChange={(e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value });
      }}
    />
  );
}

export default UiTextAreaInput;
