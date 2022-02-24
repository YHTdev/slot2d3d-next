
import React from "react";
import SpinnerIcon from "../Icons/SpinnerIcon";
import TimeIcon from "../Icons/TimeIcon";

function RealTimeResult({ result=[] }) {
  return (
    <div>
      {
        result && result.map((r,i)=>(
          i===0 &&
          <h4 key={i} className="text-center  py-2 font-bold flex justify-center items-center content-center space-x-2">
          <TimeIcon />{" "}
          <span className="text-base tracking-widest">
            <span className="result_font">
             {r.confirmDt}
            </span>{" "}
            ({r.session?r.session.name:''})
          </span>
        </h4>
        ))
      }
      {result &&
        result.map(
          (r, i) =>
            i === 0 && (
              <div className="grid grid-cols-12 rounded-md" key={i}>
                <div className="col-span-9 rounded-l-lg bg-slate-900 bg-opacity-50 px-2 py-2">
                  <span className="text-lg w-full flex  justify-center items-center content-center px-2 py-2">
                  ပေါက်ဂဏန်း
                  </span>
                </div>
                <div className="col-span-3 bg-white bg-opacity-40 rounded-r-lg px-2 py-2">
                  {r.num ? (
                    <span className="text-lg w-full flex text-yellow-400 result_font  font-bold  justify-center items-center content-center px-2 py-2">
                     {r.num.num}
                    </span>
                  ) : (
                    <div className="w-full flex text-yellow-400 justify-center items-center content-center px-2 py-2">
                      <SpinnerIcon className="animate-spin " />
                    </div>
                  )}
                </div>
              </div>
            )
        )}
    </div>
  );
}

export default RealTimeResult;
