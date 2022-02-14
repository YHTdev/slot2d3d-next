import React from "react";
import DatePicker from "react-datepicker";
function UiSinglePicker({
  className,
  formData,
  setFormData,
  id,
  name,
  maxDate,
  minDate,
}) {
  return (
    <div className={`${className}`}>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm"
        placeholderText="နေ့ရက်ရွေးချယ်ပါ"
        onChange={(date) => setFormData({ ...formData, [name]: date })}
        minDate={minDate}
        maxDate={maxDate}
        id={id}
      />
    </div>
  );
}

export default UiSinglePicker;
