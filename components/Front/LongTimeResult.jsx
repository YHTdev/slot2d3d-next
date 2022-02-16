import { format } from "date-fns";
import React from "react";
import TopyIcon from "../Icons/TopyIcon";

function LongTimeResult({results}) {
 
  return (
    <div className="flex flex-col space-y-2 w-full">
      <h4 className="text-center text-sm py-2 font-bold flex justify-center items-center content-center space-x-2">
        <TopyIcon />
        <span className="text-base tracking-widest">
          {format(new Date(),'yyyy-MM-dd')}(ထွက်ပြီးဂဏန်းများ)
        </span>
      </h4>
      <div className=" w-full block  px-2 py-2 ">
        {
          results && results.map((r,i)=>(
            <div className="grid grid-cols-12 gap-4 mb-4 rounded-md bg-slate-900 bg-opacity-50 px-2 py-2" key={i}>
          <div className="col-span-6">
            <div className="flex flex-row space-x-8 justify-start items-center content-center">
              <TopyIcon />
              <span className="text-yellow-400 text-base">{r.session}</span>
            </div>
          </div>
          <div className="col-span-6">
            <span className="text-base tracking-widest text-yellow-400">{r.result}</span>
          </div>
        </div>
          ))
        }
        </div>
    </div>
  );
}

export default LongTimeResult;
