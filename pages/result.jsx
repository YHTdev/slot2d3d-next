import React, { useState } from "react";
import FrontLogo from "../components/Front/FrontLogo";
import PageInnerWrapper from "../components/Front/PageInnerWrapper";
import PageSwitcher from "../components/Front/PageSwitcher";
import DateFilter from "../components/Front/Results/DateFilter";
import TopyIcon from "../components/Icons/TopyIcon";
import {format} from 'date-fns'
import PageWrapper from "../components/PageWrapper";
import ResultLst from "../components/Front/Results/ResultLst";
function Result({}) {
  const [selected, setSelected] = useState("2d");
  const [formData, setFormData] = useState({
    selectedDate: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()-1)
  });
  const twoDresults =[
    {
      session:"မနက်ပိုင်း",
      resultNum:"45",
      releasedDt:"2012-02-14"
    },
    {
      session:"နေ့လည်ပိုင်း",
      resultNum:"56",
      releasedDt:"2012-02-14"
    },
    {
      session:"ညနေပိုင်း",
      resultNum:"34",
      releasedDt:"2012-02-14"
    },
    {
      session:"ညပိုင်း",
      resultNum:"23",
      releasedDt:"2012-02-14"
    }
  ]
  const threeDresults =[
    {
      session:"ပထမအပတ်",
      resultNum:"455",
      releasedDt:"2012-02-14"
    },
    {
      session:"ဒုတိယအပတ်",
      resultNum:"564",
      releasedDt:"2012-02-14"
    },
    
  ]
  return (
    <PageWrapper>
      <PageInnerWrapper>
        <FrontLogo />
        <PageSwitcher selected={selected} setselected={setSelected}  />
        <div className="flex px-2 py-2 flex-col space-y-4 w-full max-w-screen-md mx-auto my-7">
        
        <DateFilter formData={formData} selected={selected}  setFormData={setFormData} />
        <h4 className="text-center text-sm py-2 font-bold flex justify-center items-center content-center space-x-2 my-5">
          <TopyIcon />
          <span className="tracking-widest text-lg">
          ထွက်ဂဏန်းများ  ({selected==='2d'? format(formData.selectedDate,'yyyy-MM-dd'):format(formData.selectedDate,'yyyy-MM')}) 
          </span>
        </h4>
        <ResultLst results={selected==='2d'?twoDresults:threeDresults} />
        </div>
      </PageInnerWrapper>
    </PageWrapper>
  );
}

export default Result;
