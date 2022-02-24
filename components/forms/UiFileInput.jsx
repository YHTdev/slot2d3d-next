import { IdentificationIcon } from "@heroicons/react/outline";
import React from "react";

export const UiFileInput = ({
  className,
  title,
  setFormData,
  name,
  id,
  readOnly,
  required,
  placeHolder,
  formData,
}) => {
  const fileHandler = (event) => {
    let files = event.target.files;
    let reader = new FileReader();

    if (files) {
      reader.readAsDataURL(files[0]);
    }
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setFormData({ ...formData, [event.target.name]: e.target.result });
      }
    };
  };
  return (
    <div className={`${className}`}>
      <label>
        <div className="flex flex-col items-center justify-center p-2 space-y-2 border rounded-md border-slate-200">
          <IdentificationIcon className="w-5 h-5 " />
          <p className="text-xs ">{title}</p>
          <input
            type="file"
            onChange={(e) => {
              fileHandler(e);
            }}
            placeholder={placeHolder}
            id={id}
            name={name}
            readOnly={readOnly}
            required={required}
            className="opacity-0"
            accept="image/png"
          />
          {formData[name] && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-image text-green-400"
              viewBox="0 0 16 16"
            >
              <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z" />
            </svg>
          )}
        </div>
      </label>
    </div>
  );
};
