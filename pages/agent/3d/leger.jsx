import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Instance } from "../../../Services/";
import Card, { CardBody, CardHeader } from "../../../components/Card";

import UiRangePicker from "../../../components/forms/UiRangePicker";

import ManagementLayout from "../../../components/layout/ManagementLayout";
import { format } from "date-fns";
import UiSelect from "../../../components/forms/UiSelect";
import ThreeDLeger from "../../../components/3D/leger";

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
    sessionId:''
  });
  const [legerData, setlegerData] = useState()
  const [sessions, setsessions] = useState([])
  const getLeger = useCallback(() => {
    if (formData.range[0] && formData.range[1]) {
      const fromDt = format(formData.range[0], "yyyy-MM-dd");
      const toDt = format(formData.range[1], "yyyy-MM-dd");
      Instance({
        url: `/agent/Bet/3D/leger?fromDt=${fromDt}&toDt=${toDt}&sessionId=${formData.sessionId}`,
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

  const getSessions = useCallback(
    () => {
      Instance({
        url:'/settings/sessions/get3dSessions',
        method:'GET'
      })
      .then(res=>{
        if(res.data && res.data.statusCode===200){
          setsessions(res.data.Data)
        }
      })
    },
    [],
  )
  

  useEffect(() => {
    getLeger();
    getSessions()
  }, [getLeger,getSessions]);

  return (
    <ManagementLayout routes={routes.threeDBetRoutes} title="3D Leger">
      <Card>
        <CardHeader>
          <div className="w-full flex flex-col md:flex-row justify-between items-center content-center space-x-0 md:space-x-2 space-y-2 md:space-y-0">
          <div className="grid grid-cols-2 gap-2 w-full max-w-screen-xs justify-center items-center content-center">
           
           <label className="text-sm text-slate-600" htmlFor="">
           ပွဲစဉ်အလိုက်
           </label>
           <UiSelect options={sessions} name="sessionId" id="sessionId" optionValue='id' optionLabel="name" formData={formData} setFromData={setformData}  isSearchable={true} placeHolder="ပွဲစဉ်အလိုက်ရှာရန်" />
         </div>
          <div className="grid grid-cols-2 gap-2 w-full max-w-screen-xs justify-center items-center content-center">
           
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
          </div>
        </CardHeader>
        <CardBody>
          <ThreeDLeger data={legerData} />
        </CardBody>
      </Card>
    </ManagementLayout>
  );
}

export default AgentLeger;
