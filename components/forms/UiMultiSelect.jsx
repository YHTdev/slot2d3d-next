import React from "react";
import ReactSelect from "react-select";
function UiMultiSelect({
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
        setFromData({ ...formData, [name]: newValue })
      }
      isDisabled={disabled}
      getOptionLabel={(option) => option[optionLabel]}
      getOptionValue={(option) => option[optionValue]}
      isMulti={isMultiple}
    />
  );
}

export default UiMultiSelect;
