import React from "react";

import DatePicker from "react-datepicker";
function UiRangePicker({
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
        className="px-2 py-1 focus:outline-none rounded-sm border border-slate-400 hover:border-l-slate-900 w-full"
        placeholderText="နေ့ရက်ရွေးချယ်ပါ"
        selectsRange={true}
        startDate={formData[name][0]}
        endDate={formData[name][1]}
        onChange={(date) => setFormData({ ...formData, [name]: date })}
        minDate={minDate}
        maxDate={maxDate}
        id={id}
      />
    </div>
  );
}

export default UiRangePicker;
