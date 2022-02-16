import { format } from "date-fns";
import React from "react";
import SpinnerIcon from "../Icons/SpinnerIcon";
import TimeIcon from "../Icons/TimeIcon";

function RealTimeResult({ result }) {
  return (
    <div>
      <h4 className="text-center text-sm py-2 font-bold flex justify-center items-center content-center space-x-2">
        <TimeIcon /> <span>{format(new Date(),"yyyy-MM-dd")} (ညနေပိုင်း)</span>
      </h4>
      <div className="grid grid-cols-12 rounded-md">
        <div className="col-span-9 rounded-l-lg bg-slate-900 bg-opacity-50 px-2 py-2">
          <span className="text-lg w-full flex  justify-center items-center content-center px-2 py-2">
            လက်ရှိပေါက်ဂဏန်း
          </span>
        </div>
        <div className="col-span-3 bg-white bg-opacity-40 rounded-r-lg px-2 py-2">
          {result
            ? <span className="text-lg w-full flex text-yellow-400  font-bold  justify-center items-center content-center px-2 py-2">
                {result}
              </span>
            : <div className="w-full flex text-yellow-400 justify-center items-center content-center px-2 py-2">
                <SpinnerIcon className="animate-spin " />
              </div>}
        </div>
      </div>
    </div>
  );
}

export default RealTimeResult;
