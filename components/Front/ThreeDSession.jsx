import { format } from "date-fns";
import React from "react";
import Timer from "../CountDown";
import LongTimeResult from "./LongTimeResult";
import RealTimeResult from "./RealTimeResult";
import Sessions from "./sessions";

function ThreeDSession() {
  const results = [
    {
      session: "ဒုတိယပတ်",
      result: "342",
    },
    {
      session: "ပထမပတ်",
      result: "878",
    },
  ];
  const sessions = [
    {
      session: "ပထမပတ်",
      dt: `${format(new Date("2022/02/01"), "yyyy-MM-dd")} ~ ${format(
        new Date("2022/02/15"),
        "yyyy-MM-dd"
      )}`,
    },
    {
      session: "ဒုတိယပတ်",
      dt: `${format(new Date("2022/02/15"), "yyyy-MM-dd")} ~ ${format(
        new Date("2022/02/30"),
        "yyyy-MM-dd"
      )}`,
    },
  ];
  return (
    <div className="flex flex-col space-y-6 w-full max-w-screen-md mx-auto" data-aos="zoom-in-up">
      <div className="flex space-x-2 justify-end items-center content-center w-full">
        <span>ဂဏန်းထွက်ရန်</span>
        <Timer hour={5} minute={30} />
        <span> သာကျန်ရှိပါသည် </span>
      </div>
      <RealTimeResult result={234} />
      <Sessions sessions={sessions} />
      <LongTimeResult results={results} />
    </div>
  );
}

export default ThreeDSession;
