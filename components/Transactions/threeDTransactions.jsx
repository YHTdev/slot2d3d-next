import React, { useState } from 'react'
import Card, { CardBody, CardHeader } from '../Card'
import UiRangePicker from '../forms/UiRangePicker'
import UiSelect from '../forms/UiSelect'
import PaginationClassic from '../Pagination/PaginationClassic'
import SelectTable, { TableCell, TableRow } from '../SelectTable'

function ThreeDTransactions() {
    const [formData, setFormData] = useState({
        agentId:'',
        sessionId:'',
        range:[new Date(new Date().getFullYear(),new Date().getMonth()-1,new Date().getDate()),new Date()]
    })
    const transactions =[
        {
            id:0,
            agentNm:'ကိုမောင်မောင်',
            session:'မနက်ပိုင်း',
            releasedDt:'2022/01/20',
            num:'344',
            amount:20000,
            status:'..',
            commission:2000,
            remainingBalance:18000,
        },
        {
            id:1,
            agentNm:'ကိုမောင်မောင်',
            session:'မနက်ပိုင်း',
            releasedDt:'2022/01/20',
            num:'455',
            amount:20000,
            status:'..',
            commission:2000,
            remainingBalance:18000,
        },
        {
            id:2,
            agentNm:'ကိုမောင်မောင်',
            session:'မနက်ပိုင်း',
            releasedDt:'2022/01/20',
            num:'678',
            amount:20000,
            status:'..',
            commission:2000,
            remainingBalance:18000,
        },
        {
            id:3,
            agentNm:'ကိုမောင်မောင်',
            session:'မနက်ပိုင်း',
            releasedDt:'2022/01/20',
            num:'123',
            amount:20000,
            status:'..',
            commission:2000,
            remainingBalance:18000,
        },
        {
            id:4,
            agentNm:'ကိုမောင်မောင်',
            session:'မနက်ပိုင်း',
            releasedDt:'2022/01/20',
            num:'098',
            amount:20000,
            status:'..',
            commission:2000,
            remainingBalance:18000,
        },
        {
            id:5,
            agentNm:'ကိုမောင်မောင်',
            session:'မနက်ပိုင်း',
            releasedDt:'2022/01/20',
            num:'784',
            amount:20000,
            status:'..',
            commission:2000,
            remainingBalance:18000,
        },
        {
            id:6,
            agentNm:'ကိုမောင်မောင်',
            session:'မနက်ပိုင်း',
            releasedDt:'2022/01/20',
            num:'234',
            amount:20000,
            status:'..',
            commission:2000,
            remainingBalance:18000,
        }
    ]
  return (
    <div>
         <Card>
        <CardHeader>
        <div className='w-full'>
          <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-3'>
                <UiSelect 
                     id="agentId"
                     name="agentId"
                     options={[]}
                     placeHolder="အသုံးပြုသူအမည်"
                     optionLabel="label"
                     optionValue="value"
                    />
                </div>
                <div className='col-span-12 md:col-span-3'>
                    <UiSelect 
                     id="sessionId"
                     name="sessionId"
                     options={[]}
                     placeHolder="အချိန်အပိုင်းအခြား"
                     optionLabel="label"
                     optionValue="value"
                    />
                </div>
                <div className='col-span-12 md:col-span-3'>
                    <UiRangePicker 
                     id='range'
                     name='range'
                     formData={formData}
                     setFormData={setFormData}
                     minDate={new Date(new Date().getFullYear()-1,new Date().getMonth(),new Date().getDate())}
                     maxDate={new Date()}
                    />
                </div>
           </div>
           <div>
               
           </div>
          </div>
        </CardHeader>
        <CardHeader>
          <div className="w-full">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3 tracking-widest">
                <div className="w-full flex-col space-y-4 justify-start items-center content-center px-4 py-2 bg-slate-200 rounded-md border-2 border-l-yellow-400">
                  <h3 className="text-slate-400  text-xl">စုစုပေါင်း</h3>
                  <h6 className="text-lg text-yellow-400"> 456000 ကျပ် </h6>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="w-full flex-col space-y-4 justify-start items-center content-center px-4 py-2 bg-slate-200 rounded-md border-2 border-l-yellow-800">
                  <h3 className="text-slate-400  text-xl">ကော်မရှင်</h3>
                  <h6 className="text-lg text-yellow-800"> 4560 ကျပ် </h6>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="w-full flex-col space-y-4 justify-start items-center content-center px-4 py-2 bg-slate-200 rounded-md border-2 border-l-red-400">
                  <h3 className="text-slate-400  text-xl">လျော်ရငွေ</h3>
                  <h6 className="text-lg text-red-400"> 356000 ကျပ် </h6>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="w-full flex-col space-y-4 justify-start items-center content-center px-4 py-2 bg-slate-200 rounded-md border-2 border-l-green-400">
                  <h3 className="text-slate-400  text-xl">အသားတင်ငွေ</h3>
                  <h6 className="text-lg text-green-400"> 156000 ကျပ် </h6>
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
                        <span>အခြေအန</span>
                    </TableCell>
                    <TableCell isHeader={true}>
                        <span>ကော်မရှင်</span>
                    </TableCell>
                    <TableCell isHeader={true}>
                        <span>အသားတင်ငွေ</span>
                    </TableCell>
                    <TableCell isHeader={true}>
                        <span>လုပ်ဆောင်ချက်များ</span>
                    </TableCell>
                </TableRow>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
               {
                   transactions.map((t,i)=>(
                    <TableRow key={i}>
                    <TableCell>
                        <div className="text-left">
                           {t.id}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                           {t.agentNm}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                           {t.session}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                            {t.releasedDt}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                           {t.num}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                           {t.amount}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                            {t.status}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                           {t.commission}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                            {t.remainingBalance}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="text-left">
                           .....
                        </div>
                    </TableCell>
                </TableRow>
                   ))
               }
            </tbody>
          </SelectTable>
          <div>
              <PaginationClassic />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ThreeDTransactions