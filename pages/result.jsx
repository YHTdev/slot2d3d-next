import React, { useCallback, useEffect, useState } from "react";
import FrontLogo from "../components/Front/FrontLogo";
import PageInnerWrapper from "../components/Front/PageInnerWrapper";
import PageSwitcher from "../components/Front/PageSwitcher";
import DateFilter from "../components/Front/Results/DateFilter";
import TopyIcon from "../components/Icons/TopyIcon";
import { format } from "date-fns";
import PageWrapper from "../components/PageWrapper";
import ResultLst from "../components/Front/Results/ResultLst";
import AnimateText from "../components/TypeAnimation";
import { Instance } from "../Services/";
function Result({}) {
  const [selected, setSelected] = useState("2d");
  const [formData, setFormData] = useState({
    selectedDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ),
  });

  const [twoDresults, setTwoDresults] = useState([]);
  const [threeDresults, setThreeDresults] = useState([]);

  const get2DResults = useCallback(() => {
    const query = `confirmDt=${format(formData.selectedDate,'yyyy-MM-dd')}`
    Instance({
      url: `/settings/result/get2dresults?${query}`,
      method: "GET",
    }).then((res) => {
      if (res.data && res.data.statusCode === 200 && res.data.Data) {
        setTwoDresults(res.data.Data);
      }
    });
  }, [formData]);
  const get3DResults = useCallback(() => {
    const query = `confirmDt=${format(formData.selectedDate,'yyyy-MM-dd')}`
    Instance({
      url: `/settings/result/get3dresult?${query}`,
      method: "GET",
    }).then((res) => {
      if (res.data && res.data.statusCode === 200 && res.data.Data) {
        setThreeDresults(res.data.Data);
      }
    });
  }, [formData])

  useEffect(() => {
    get2DResults()
    get3DResults()
  }, [get2DResults,get3DResults])
  
  return (
    <PageWrapper>
      <PageInnerWrapper>
        <FrontLogo />
        <AnimateText text={`WELCOME FROM GOLDEN21`} />
        <PageSwitcher selected={selected} setselected={setSelected} />
        <div className="flex flex-col w-full max-w-screen-md px-2 py-2 mx-auto space-y-4 my-7">
          <DateFilter formData={formData} setFormData={setFormData} />
          <h4 className="flex items-center content-center justify-center py-2 my-5 space-x-2 text-sm font-bold text-center">
            <TopyIcon />
            <span className="text-lg tracking-widest">
              ထွက်ဂဏန်းများ{" "}
              <span className="result_font">
                {format(formData.selectedDate, "yyyy-MM-dd")}
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
