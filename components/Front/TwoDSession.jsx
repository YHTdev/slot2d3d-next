import React from "react";
import Timer from "../CountDown";
import LongTimeResult from "./LongTimeResult";
import RealTimeResult from "./RealTimeResult";
import Sessions from "./sessions";

function TwoDSession() {
  const results = [
    {
      session: "နေ့လည်",
      result: "78",
    },
    {
      session: "ညနေ",
      result: "45",
    },
  ];
  const sessions = [
    {
      session: "မနက်",
      dt: "7:00AM - 9:00AM",
    },
    {
      session: "နေ့လည်",
      dt: "9:00AM - 12:00AM",
    },
    
    {
      session: "ညနေ",
      dt: "4:00PM - 6:00PM",
    },
  ];
  return (
    <div className="flex flex-col space-y-6 w-full max-w-screen-md mx-auto" data-aos="zoom-in-up">
      <div className="flex space-x-2 justify-end items-center content-center w-full">
        <span>ဂဏန်းထွက်ရန်</span>
        <Timer hour={1} minute={30} />
        <span> သာကျန်ရှိပါသည် </span>
      </div>
      <RealTimeResult />
      <Sessions sessions={sessions} />
      <LongTimeResult results={results} />
    </div>
  );
}

export default TwoDSession;
