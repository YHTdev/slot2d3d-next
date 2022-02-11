import React from "react";

function UiButton({
  className,
  type,
  title,
  disabled = false,
  actionButton = false,
  NextFun
}) {
  return actionButton ? (
    <button
      onClick={NextFun}
      className={`${className}  px-2 py-1 border border-slate-400 text-slate-400 hover:text-slate-900 hover:border-slate-900 rounded-sm`}
      disabled={disabled}
      type="button"
    >
      <span>{title}</span>
    </button>
  ) : (
    <button
      className={`${className} px-2 py-1 border border-slate-400 text-slate-400 hover:text-slate-900 hover:border-slate-900 rounded-sm`}
      disabled={disabled}
      type={type}
    >
      <span>{title}</span>
    </button>
  );
}

export default UiButton;
