import React, { useState } from "react";
import { useSelector } from "react-redux";
import LayoutSwitter from "../../../../components/2D/layoutSwitter";
import LimitationGrid from "../../../../components/2D/LimitationGrid";
import LimitationList from "../../../../components/2D/limitationList";
import UiSelect from "../../../../components/forms/UiSelect";
import ExclimationIcon from "../../../../components/Icons/ExclimationIcon";
import ManagementLayout from "../../../../components/layout/ManagementLayout";
import SlotData from '../../../../data/2dnumber.json'
function Limitations() {
    const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const { routes } = useSelector((state) => state.management);
  const [selected, setSelected] = useState("grid");
  const [formData, setformData] = useState({
    session:''
})
 const Sessions = [
  {
    label: "မနက်ပိုင်း",
    value: "1",
  },
  {
    label: "နေ့လည်ပိုင်း",
    value: "2",
  },
  {
    label: "ညနေပိုင်း",
    value: "3",
  },
];
  return (
    <ManagementLayout routes={routes.twoDBetRoutes} title="သတ်မှတ်ချက်များ">
      <LayoutSwitter selected={selected} setSelected={setSelected} />
      <div className="flex w-full justify-between items-center content-center my-4">
         <UiSelect options={Sessions} name="session" id="session" formData={formData} setFromData={setformData} optionLabel="label" optionValue="value" placeHolder="အချိန်ရွေးချယ်ရန်" />
        {
            selected==='grid' && 
            <button
          onClick={() => {
            setIsColorModalOpen(!isColorModalOpen);
          }}
          className="text-xs text-slate-500 flex flex-row space-x-2 justify-start items-center content-center"
        >
          <span>အရောင်သတ်မှတ်ချက်</span>
          <ExclimationIcon />
        </button>
        }
        
       
      </div>
      {
            selected==='list' && 
            <LimitationList data={SlotData} />
        }
      {selected === "grid" && <LimitationGrid isColorModalOpen={isColorModalOpen} setIsColorModalOpen={setIsColorModalOpen} data={SlotData} />}
    </ManagementLayout>
  );
}

export default Limitations;
