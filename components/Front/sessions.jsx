import React from "react";
import EventIcon from "../Icons/EventIcon";
import TimeIcon from "../Icons/TimeIcon";

function Sessions() {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <h4 className="text-center text-sm py-2 font-bold flex justify-center items-center content-center space-x-2">
        <EventIcon /> <span>ပွဲစဉ်များ</span>
      </h4>
      <div className=" w-full block  px-2 py-2 rounded-md bg-slate-900 bg-opacity-50">
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-6">
            <div className="flex flex-row space-x-8 justify-start items-center content-center">
              <TimeIcon />
              <span className="text-yellow-400 text-base">မနက်</span>
            </div>
          </div>
          <div className="col-span-6">
            <span className="text-lg tracking-widest text-yellow-400">
              9:00AM~12:00PM
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-6">
            <div className="flex flex-row space-x-8 justify-start items-center content-center">
              <TimeIcon />
              <span className="text-yellow-400 text-base">နေ့လည်</span>
            </div>
          </div>
          <div className="col-span-6">
            <span className="text-lg tracking-widest  text-yellow-400">
              9:00AM~12:00PM
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <div className="flex flex-row space-x-8 justify-start items-center content-center">
              <TimeIcon />
              <span className="text-yellow-400 text-base">ညနေ</span>
            </div>
          </div>
          <div className="col-span-6">
            <span className="text-lg tracking-widest  text-yellow-400">
              5:00PM~12:00PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sessions;
