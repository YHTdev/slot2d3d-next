import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import SpeakerIcon from "../Icons/SpeakerIcon";
function AnimateText({ text }) {
  const [count, setCount] = useState(1);
  const options = {
    show: false,
  };
  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <div className="grid grid-cols-12 gap-3 justify-center items-center content-center w-full max-w-screen-md mx-auto px-4 py-2">
      <div className="col-span-1">
        <SpeakerIcon />
      </div>
      <div className="col-span-11">
        {count && (
          <Typist
            cursor={options}
            startDelay={3}
            onTypingDone={() => setCount(0)}
            avgTypingDelay={500}
          >
            <p>{text}</p>
          </Typist>
        )}
      </div>
    </div>
  );
}

export default AnimateText;
