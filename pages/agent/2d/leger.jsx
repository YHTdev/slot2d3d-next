import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TwoDLeger from "../../../components/2D/Leger";
import { Instance } from "../../../Services/";
import Card, { CardBody, CardHeader } from "../../../components/Card";

import UiRangePicker from "../../../components/forms/UiRangePicker";

import ManagementLayout from "../../../components/layout/ManagementLayout";
import { format } from "date-fns";

function AgentLeger() {
  const { routes } = useSelector((state) => state.management);

  const [formData, setformData] = useState({
    range: [
      new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      ),
      new Date(new Date().getFullYear(),
      new Date().getMonth() +1,
      new Date().getDate()),
    ],
  });
  const [legerData, setlegerData] = useState()

 

  const getLeger = useCallback(() => {
    if (formData.range[0] && formData.range[1]) {
      const fromDt = format(formData.range[0], "yyyy-MM-dd");
      const toDt = format(formData.range[1], "yyyy-MM-dd");
      Instance({
        url: `/agent/Bet/2D/leger?fromDt=${fromDt}&toDt=${toDt}`,
        method: "GET",
      })
        .then((res) => {
         if(res.data && res.data.statusCode===200){
           setlegerData(res.data.Data)
         }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [formData]);

  useEffect(() => {
    getLeger();
  }, [getLeger]);

  return (
    <ManagementLayout routes={routes.twoDBetRoutes} title="2D Leger">
      <Card>
        <CardHeader>
          <div className="grid grid-cols-2 gap-2 w-full max-w-screen-xs">
           
            <label className="text-sm text-slate-600" htmlFor="">
             နေ့ရက်အပိုင်းအခြားလိုက်ရှာရန်
            </label>
            <UiRangePicker
              className="w-full rounded-md "
              name="range"
              id="range"
              formData={formData}
              setFormData={setformData}
              minDate={
                new Date(
                  new Date().getFullYear() - 20,
                  new Date().getMonth(),
                  new Date().getDate()
                )
              }
              maxDate={
                new Date(
                  new Date().getFullYear() + 20,
                  new Date().getMonth(),
                  new Date().getDate()
                )
              }
            />
          </div>
        </CardHeader>
        <CardBody>
          <TwoDLeger data={legerData} />
        </CardBody>
      </Card>
    </ManagementLayout>
  );
}

export default AgentLeger;
