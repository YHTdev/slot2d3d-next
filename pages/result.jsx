import React, { useState } from "react";
import FrontLogo from "../components/Front/FrontLogo";
import PageInnerWrapper from "../components/Front/PageInnerWrapper";
import PageSwitcher from "../components/Front/PageSwitcher";
import DateFilter from "../components/Front/Results/DateFilter";
import TopyIcon from "../components/Icons/TopyIcon";
import { format } from "date-fns";
import PageWrapper from "../components/PageWrapper";
import ResultLst from "../components/Front/Results/ResultLst";
import AnimateText from "../components/TypeAnimation";
function Result({}) {
  const [selected, setSelected] = useState("2d");
  const [formData, setFormData] = useState({
    selectedDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() - 1
    ),
  });
  const twoDresults = [
    {
      session: "မနက်ပိုင်း",
      resultNum: "45",
      releasedDt: "2012-02-14",
    },
    {
      session: "နေ့လည်ပိုင်း",
      resultNum: "56",
      releasedDt: "2012-02-14",
    },
    {
      session: "ညနေပိုင်း",
      resultNum: "34",
      releasedDt: "2012-02-14",
    },
    {
      session: "ညပိုင်း",
      resultNum: "23",
      releasedDt: "2012-02-14",
    },
  ];
  const threeDresults = [
    {
      session: "ပထမအပတ်",
      resultNum: "455",
      releasedDt: "2012-02-14",
    },
    {
      session: "ဒုတိယအပတ်",
      resultNum: "564",
      releasedDt: "2012-02-14",
    },
  ];
  return (
    <PageWrapper>
      <PageInnerWrapper>
        <FrontLogo />
        <AnimateText
          text={`ဖုန်း ၀၉-၁၂၃၄၅၆၇၈၉ သို့ဆက်သွယ်မေးမြန်းနိုင်ပါသည်`}
        />
        <PageSwitcher selected={selected} setselected={setSelected} />
        <div className="flex flex-col w-full max-w-screen-md px-2 py-2 mx-auto space-y-4 my-7">
          <DateFilter
            formData={formData}
            selected={selected}
            setFormData={setFormData}
          />
          <h4 className="flex items-center content-center justify-center py-2 my-5 space-x-2 text-sm font-bold text-center">
            <TopyIcon />
            <span className="text-lg tracking-widest">
              ထွက်ဂဏန်းများ{" "}
              <span className="result_font">
                (
                {selected === "2d"
                  ? format(formData.selectedDate, "yyyy-MM-dd")
                  : format(formData.selectedDate, "yyyy-MM")}
                ){" "}
              </span>
            </span>
          </h4>
          {selected === "2d" && <ResultLst results={twoDresults} />}
          {selected === "3d" && <ResultLst results={threeDresults} />}
        </div>
      </PageInnerWrapper>
    </PageWrapper>
  );
}

export default Result;
