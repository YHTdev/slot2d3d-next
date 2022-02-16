import React from "react";
import EventIcon from "../Icons/EventIcon";
import TimeIcon from "../Icons/TimeIcon";

function Sessions({sessions}) {

  return (
    <div className="flex flex-col space-y-2 w-full">
      <h4 className="text-center  py-2 font-bold flex justify-center items-center content-center space-x-2">
        <EventIcon /> <span className="text-base tracking-widest">ပွဲစဉ်များ</span>
      </h4>
      <div className=" w-full block  px-2 py-2">
        {
          sessions && sessions.map((s,i)=>(
            <div className="grid grid-cols-12 gap-4 mb-4  rounded-md bg-slate-900 bg-opacity-50 px-2 py-2" key={i}>
          <div className="col-span-6">
            <div className="flex flex-row space-x-8 justify-start items-center content-center">
              <TimeIcon />
              <span className="text-yellow-400 text-base">{s.session}</span>
            </div>
          </div>
          <div className="col-span-6">
            <span className="text-base tracking-widest text-yellow-400">
             {s.dt}
            </span>
          </div>
        </div>
          ))
        }
       
      </div>
    </div>
  );
}

export default Sessions;
