import React, { useState } from "react";
import { useSelector } from "react-redux";
import LimitationList from "../../../../components/3D/limitationList";

import UiSelect from "../../../../components/forms/UiSelect";

import ManagementLayout from "../../../../components/layout/ManagementLayout";
import ThreeDLimitations from '../../../../data/3dnumber.json'
function Limitations() {
  const { routes } = useSelector((state) => state.management);

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
    <ManagementLayout routes={routes.threeDBetRoutes} title="3D limitations">
      <div className="flex w-full justify-between items-center content-center my-4">
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
      </div>
      <LimitationList data={ThreeDLimitations}  />
    </ManagementLayout>
  );
}

export default Limitations;
