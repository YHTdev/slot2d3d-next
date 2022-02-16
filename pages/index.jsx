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
  const [selected, setSelected] = useState('2d')
  return (
    <PageWrapper>
      <div
        className="flex justify-center w-full  items-center content-center  h-screen overflow-y-scroll py-24"
        data-aos="zoom-in-up"
      >
      <PageInnerWrapper>
        <FrontLogo />
       
         <AnimateText text={`ဖုန်း ၀၉-၁၂၃၄၅၆၇၈ သို့ဆက်သွယ်မေးမြန်းနိုင်ပါသည်`} />
         
        <PageSwitcher selected={selected} setselected={setSelected} />
         
        <ResultWrapper>
        {
          selected === '2d' && 
          <TwoDSession />
        }
        {
          selected==='3d' && 
          <ThreeDSession />
        }
        </ResultWrapper>
      </PageInnerWrapper>
      </div>
    </PageWrapper>
  );
}

export default Home;
