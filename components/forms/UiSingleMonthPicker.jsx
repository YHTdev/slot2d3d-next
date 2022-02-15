import { format } from "date-fns";
import React from "react";
import DatePicker from "react-datepicker";

function UiSingleMonthPicker({
  className,
  formData,
  setFormData,
  id,
  name,
  maxDate,
  minDate
}) {
  console.log(formData);
  return (
    <div className={`${className}`}>
      <DatePicker
        dateFormat="yyyy/MM"
        className={`${className} appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-slate-500 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm `}
        placeholderText="နေ့ရက်ရွေးချယ်ပါ"
        onChange={date => setFormData({ ...formData, [name]: date })}
        minDate={minDate}
        maxDate={maxDate}
        value={format(formData[name], "yyyy-MM")}
        showMonthYearPicker
        showFullMonthYearPicker
        showTwoColumnMonthYearPicker
        id={id}
      />
    </div>
  );
}

export default UiSingleMonthPicker;
