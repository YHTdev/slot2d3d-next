import React, { useState } from "react";
import { useSelector } from "react-redux";
import TwoDLeger from "../../../../components/2D/Leger";

import Card, { CardBody, CardHeader } from "../../../../components/Card";

import UiRangePicker from "../../../../components/forms/UiRangePicker";

import UiSelect from "../../../../components/forms/UiSelect";

import ManagementLayout from "../../../../components/layout/ManagementLayout";

function AgentLeger() {
  const { routes } = useSelector((state) => state.management);

  const [formData, setformData] = useState({
    userId: "",
    range:[new Date(new Date().getFullYear(),new Date().getMonth()-1,new Date().getDate()),new Date()]
  });
  const Users = [
    {
      label: "ကိုအာကာ",
      value: "1",
    },
    {
      label: "ကိုမောင်မောင်",
      value: "2",
    },
    {
      label: "ကိုအောင်အောင်",
      value: "3",
    },
    {
      label: "ကိုကျော်",
      value: "4",
    },
  ];

  
  return (
    <ManagementLayout routes={routes.threeDBetRoutes} title="3D limitations">
      <Card>
          <CardHeader>
          <div className="flex w-full justify-start space-x-0 md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row items-center content-center my-4">
        <UiSelect
          options={Users}
          name="userId"
          id="userId"
          formData={formData}
          setFromData={setformData}
          optionLabel="label"
          optionValue="value"
          placeHolder="အမည်ရွေးပါ"
        />
        <label className="text-sm text-slate-600" htmlFor="">နေ့ရက်အပိုင်းအခြား</label>
       <UiRangePicker
       className='rounded-md'
        name="range"
        id="range"
        formData={formData}
        setFormData={setformData}
        minDate={new Date(new Date().getFullYear()-20,new Date().getMonth(),new Date().getDate())}
        maxDate={new Date(new Date().getFullYear()+20,new Date().getMonth(),new Date().getDate())}
       />
      </div>
        </CardHeader>
        <CardBody>
        < TwoDLeger />
        </CardBody>
      </Card>
    
    </ManagementLayout>
  );
}

export default AgentLeger;
