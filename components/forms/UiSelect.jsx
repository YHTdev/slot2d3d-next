import React from "react";
import ReactSelect from "react-select";
function UiSelect({
  className,
  formData,
  setFromData,
  name,
  id,
  placeHolder,
  optionLabel,
  optionValue,
  options = [],
  disabled = false,
  isMultiple = false,
  isSearchable=false
}) {
  return (
    <ReactSelect
      
      className={`${className}`}
      name={name}
      id={id}
      isSearchable={isSearchable}
      options={options}
      
      placeholder={placeHolder}
      onChange={(newValue) =>
        setFromData({ ...formData, [name]: newValue[optionValue] })
      }
      isDisabled={disabled}
      getOptionLabel={(option) => option[optionLabel]}
      getOptionValue={(option) => option[optionValue]}
      isMulti={isMultiple}
    />
  );
}

export default UiSelect;
