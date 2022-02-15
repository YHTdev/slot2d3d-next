import React from "react";
import Timer from "../CountDown";
import LongTimeResult from "./LongTimeResult";
import RealTimeResult from "./RealTimeResult";
import Sessions from "./sessions";

function TwoDSession() {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-screen-md mx-auto">
      <div className="flex space-x-2 justify-end items-center content-center w-full">
      <span>ဂဏန်းထွက်ရန်</span>
      <Timer hour={1} minute={30} />
      <span> သာကျန်ရှိပါသည် </span>
      </div>
      <RealTimeResult />
      <Sessions />
      <LongTimeResult />
    </div>
  );
}

export default TwoDSession;
