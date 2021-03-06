import React, { useState } from "react";
import { useSelector } from "react-redux";

import LayoutSwitter from "../../../components/2D/layoutSwitter";
import LimitationGrid from "../../../components/2D/LimitationGrid";
import LimitationList from "../../../components/2D/limitationList";
import Card, { CardBody, CardHeader } from "../../../components/Card";
import UiSelect from "../../../components/forms/UiSelect";
import ExclimationIcon from "../../../components/Icons/ExclimationIcon";
import ManagementLayout from "../../../components/layout/ManagementLayout";
import SlotData from "../../../data/2dnumber.json";
function Limitations() {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const { routes } = useSelector((state) => state.management);
  const [selected, setSelected] = useState("grid");
  const [formData, setformData] = useState({
    session: "",
  });
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
    <ManagementLayout routes={routes.twoDBetRoutes} title="2D သတ်မှတ်ချက်များ">
      <LayoutSwitter selected={selected} setSelected={setSelected} />
      <Card>
        <CardHeader>
          <div className="flex items-center content-center justify-between w-full my-4">
            <UiSelect
              options={Sessions}
              name="session"
              id="session"
              formData={formData}
              setFromData={setformData}
              optionLabel="label"
              optionValue="value"
              placeHolder="အချိန်ရွေးချယ်ရန်"
            />
            {selected === "grid" && (
              <button
                onClick={() => {
                  setIsColorModalOpen(!isColorModalOpen);
                }}
                className="flex flex-row items-center content-center justify-start space-x-2 text-xs text-slate-500"
              >
                <span>အရောင်သတ်မှတ်ချက်</span>
                <ExclimationIcon />
              </button>
            )}
          </div>
        </CardHeader>
        <CardBody>
          {selected === "list" && <LimitationList data={SlotData} />}
          {selected === "grid" && (
            <LimitationGrid
              isColorModalOpen={isColorModalOpen}
              setIsColorModalOpen={setIsColorModalOpen}
              data={SlotData}
            />
          )}
        </CardBody>
      </Card>
    </ManagementLayout>
  );
}

export default Limitations;
