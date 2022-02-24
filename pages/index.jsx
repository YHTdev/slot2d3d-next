import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";

import PageInnerWrapper from "../components/Front/PageInnerWrapper";
import FrontLogo from "../components/Front/FrontLogo";
import PageSwitcher from "../components/Front/PageSwitcher";
import TwoDSession from "../components/Front/TwoDSession";
import ThreeDSession from "../components/Front/ThreeDSession";
import ResultWrapper from "../components/Front/ResultWrapper";
import AnimateText from "../components/TypeAnimation";

function Home() {
  const [selected, setSelected] = useState("2d");
  return (
    <PageWrapper>
      <div className="flex items-center content-center justify-center w-full h-screen py-24 overflow-y-scroll">
        <PageInnerWrapper>
          <FrontLogo />
          <AnimateText
          text={`WELCOME FROM GOLDEN21`}
          
        />
          <PageSwitcher selected={selected} setselected={setSelected} />

          <ResultWrapper>
            {selected === "2d" && <TwoDSession />}
            {selected === "3d" && <ThreeDSession />}
          </ResultWrapper>
        </PageInnerWrapper>
      </div>
    </PageWrapper>
  );
}

export default Home;
