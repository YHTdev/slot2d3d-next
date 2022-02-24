import React, { useCallback, useEffect, useState } from "react";
import Card, { CardBody, CardHeader } from "../Card";
import UiRangePicker from "../forms/UiRangePicker";
import UiSelect from "../forms/UiSelect";
import PaginationClassic from "../Pagination/PaginationClassic";
import SelectTable, { TableCell, TableRow } from "../SelectTable";
import {Instance} from '../../Services/'
import {format} from 'date-fns'
import { DotsHorizontalIcon } from "@heroicons/react/solid";
function ThreeDTransactions({users=[],sessions=[]}) {
  const [formData, setFormData] = useState({
    agentId: "",
    sessionId: "",
    range: [
      new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      ),
      new Date(new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()+1),
    ],
  });
  const [legerData, setlegerData] = useState()
  const getLegers = useCallback(
    () => {
      if (formData.range[0] && formData.range[1]) {
        const fromDt = format(formData.range[0], "yyyy-MM-dd");
        const toDt = format(formData.range[1], "yyyy-MM-dd");
        Instance({
          url: `/admin/leger?fromDt=${fromDt}&toDt=${toDt}&sessionId=${formData.sessionId}&agentId=${formData.agentId}&type=ThreeD`,
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
    },
    [formData],
  )

  useEffect(() => {
   getLegers()
  }, [getLegers])
  
  
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="w-full">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3">
                <UiSelect
                  id="agentId"
                  name="agentId"
                  options={[]}
                  placeHolder="အသုံးပြုသူအမည်"
                  optionLabel="label"
                  optionValue="value"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <UiSelect
                  id="sessionId"
                  name="sessionId"
                  options={[]}
                  placeHolder="အချိန်အပိုင်းအခြား"
                  optionLabel="label"
                  optionValue="value"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <UiRangePicker
                  id="range"
                  name="range"
                  formData={formData}
                  setFormData={setFormData}
                  minDate={
                    new Date(
                      new Date().getFullYear() - 1,
                      new Date().getMonth(),
                      new Date().getDate()
                    )
                  }
                  maxDate={new Date( new Date().getFullYear() +1,
                    new Date().getMonth(),
                    new Date().getDate())}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardHeader>
          <div className="w-full">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3 tracking-widest">
                <div className="w-full flex-col space-y-4 justify-start items-center content-center px-4 py-2 bg-slate-200 rounded-md border-2 border-l-yellow-400">
                  <h3 className="text-slate-400  text-xl">စုစုပေါင်း</h3>
                  <h6 className="text-lg text-yellow-400"> {legerData && legerData.grandTotal} ကျပ် </h6>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="w-full flex-col space-y-4 justify-start items-center content-center px-4 py-2 bg-slate-200 rounded-md border-2 border-l-yellow-800">
                  <h3 className="text-slate-400  text-xl">ကော်မရှင်</h3>
                  <h6 className="text-lg text-yellow-800"> {legerData && parseInt(legerData.grandTotal)*8/100} ကျပ် </h6>
                </div>
              </div>
              
              
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <SelectTable>
            <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
              <TableRow>
                <TableCell isHeader={true}>
                  <span>စဉ်</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>အမည်</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>အေးဂျင့်အမည်</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>အချိန်</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>နေ့ရက်</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>ဂဏန်း</span>
                </TableCell>

                <TableCell isHeader={true}>
                  <span>ပမာဏ</span>
                </TableCell>
               
                <TableCell isHeader={true}>
                  <span>လုပ်ဆောင်ချက်များ</span>
                </TableCell>
              </TableRow>
            </thead>
           {
             legerData && 
             <tbody className="text-sm divide-y divide-slate-200">
             {legerData.leger.map((t, i) => (
               <TableRow key={i}>
                 <TableCell>
                   <div className="text-left">{i+1}</div>
                 </TableCell>
                 <TableCell>
                   <div className="text-left">{t.customerNm}</div>
                 </TableCell>
                 <TableCell>
                   <div className="text-left">{t.agent?t.agent.name:''}</div>
                 </TableCell>
                 <TableCell>
                   <div className="text-left">{t.session?t.session.name:''}</div>
                 </TableCell>
                 <TableCell>
                   <div className="text-left">{format(new Date(t.createdAt),'yyyy-MM-dd')}</div>
                 </TableCell>
                 <TableCell>
                   <div className="text-left">
                     <DotsHorizontalIcon className="w-4 h-4" />
                   </div>
                 </TableCell>
                 <TableCell>
                   <div className="text-left">{t.totalAmt}</div>
                 </TableCell>
                 
                 <TableCell>
                   <div className="text-left">.....</div>
                 </TableCell>
               </TableRow>
             ))}
           </tbody>
           }
          </SelectTable>
          
        </CardBody>
      </Card>
    </div>
  );
}

export default ThreeDTransactions;
