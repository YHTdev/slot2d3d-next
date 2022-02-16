import React from "react";
import Countdown from "react-countdown";
import { hoursToMilliseconds, minutesToMilliseconds } from "date-fns";
function Timer({ hour, minute }) {
  const Completionist = () => (
    <span className="px-2 border border-slate-800 rounded-lg">done</span>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex flex-row justify-between items-center content-center font-bold result_font">
          <span className="px-3 text-yellow-400 py-2 rounded-md text-sm flex justify-center items-center content-center border border-slate-800">
            {hours>10?hours:`0${hours}`}
          </span>{" "}
          <span className="flex justify-center items-center content-center px-2 py-1">
            :
          </span>
          <span className="px-3 py-2 text-yellow-400 rounded-md flex text-sm justify-center items-center content-center border border-slate-800">
            {minutes>10?minutes:`0${minutes}`}
          </span>
          <span className="flex justify-center items-center content-center px-2 py-1">
            :
          </span>
          <span className="px-3 py-2 text-yellow-400 rounded-md flex text-sm justify-center items-center content-center border border-slate-800">
            {seconds>10?seconds:`0${seconds}`}
          </span>
        </div>
      );
    }
  };
  return (
    <div>
      <Countdown
        date={
          Date.now() + hoursToMilliseconds(hour) + minutesToMilliseconds(minute)
        }
        renderer={renderer}
      ></Countdown>
    </div>
  );
}

export default Timer;
