import React, { useCallback, useEffect, useState } from "react";

import Timer from "../../../components/CountDown";

import UiSelect from "../../../components/forms/UiSelect";
import UiInput from "../../../components/forms/UiInput";
import UiButton from "../../../components/forms/UiButton";
import SelectTable, {
  TableCell,
  TableRow,
} from "../../../components/SelectTable";
import ManagementLayout from "../../../components/layout/ManagementLayout";
import { useSelector } from "react-redux";
import TrashIcon from "../../../components/Icons/TrashIcon";
import { useToasts } from "react-toast-notifications";
import UiMultiSelect from "../../../components/forms/UiMultiSelect";
import { Instance } from "../../../Services";
import { each, find } from "lodash";
function Slot2D() {
  const [formData, setFormData] = useState({
    customerNm: "",
    betOnTwoDNumber: [],
    sessionId: "",
    amount: 0,
    keywords: [],
    totalAmount: 0,
    selectedNums: [],
  });
  const [sessions, setSessions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [postData, setpostData] = useState();
  const { Nums } = useSelector((state) => state.management);
  const twoDNums = Nums.twoD;
  console.log(formData);
  const getSessions = useCallback(() => {
    Instance({
      url: "/settings/sessions/get2dSessions",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          setSessions(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const onSumEvent = () => {
    if (formData.betOnTwoDNumber.length > 0 || formData.keywords.length > 0) {
      if (formData.customerNm && formData.sessionId && formData.amount) {
        if (formData.betOnTwoDNumber) {
          let selectedNums = formData.betOnTwoDNumber;
          
          each(formData.betOnTwoDNumber, (b) => {
            selectedNums.push({
              twoDNumerId: b.id,
              amount: formData.amount,
            });
          });
          
        }
        else{
          each(formData.keywords, (b) => {
            nums.push({
              twoDNumerId: b.id,
              amount: parseInt(formData.amount),
            });
          });
          formData.selectedNums.push(nums)
        }
      }
      else{
        addToast('သေချာစွာဖြည့်ပါ',{appearance:'warning',autoDismiss:true})
      }
    }
    else{
      addToast('ဂဏန်းရွေးချယ်ပါ',{appearance:'warning',autoDismiss:true})
    }
  };

  const getKeywords = useCallback(() => {
    Instance({
      url: "/settings/keywords/get2d_keywords",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          setKeywords(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getSessions();
    getKeywords();
  }, [getSessions, getKeywords]);

  const { routes } = useSelector((state) => state.management);
  const { addToast } = useToasts();

  return (
    <ManagementLayout title="2D ထိုးရန်" routes={routes.twoDBetRoutes}>
      <div className="flex flex-row items-center justify-between mb-8">
        {/* <div className="mb-8 sm:flex sm:justify-between sm:items-center"> */}
        {/* Left: Title */}
        <div className="flex items-center content-center justify-end w-full"></div>
        <div className="flex flex-col items-center content-center justify-end w-full space-x-0 space-y-2 text-sm tracking-widest md:flex-row md:space-x-2 md:space-y-0">
          <span>ပိတ်ရန်ကျန်ချိန်</span>
          <Timer hour={1} minute={30} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <form className="flex flex-col justify-start w-full space-y-5">
            <UiSelect
              name="sessionId"
              id="sessionId"
              formData={formData}
              setFromData={setFormData}
              options={sessions.filter((s) => s.status === true)}
              optionLabel="name"
              optionValue="id"
              placeHolder="အချိန်ရွေးချယ်ပါ"
            />
            <UiInput
              name="customerNm"
              id="customerNm"
              formData={formData}
              setFromData={setFormData}
              placeHolder="အမည်ထည့်ပါ"
              required={true}
              type="text"
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <UiMultiSelect
                  isMultiple={true}
                  isSearchable={true}
                  placeHolder="ဂဏန်းရွေးချယ်ပါ"
                  formData={formData}
                  setFromData={setFormData}
                  name="betOnTwoDNumber"
                  id="betOnTwoDNumber"
                  options={twoDNums}
                  optionLabel="num"
                  optionValue="id"
                />
              </div>
              <div className="">
                <UiInput
                  name="amount"
                  id="amount"
                  formData={formData}
                  setFromData={setFormData}
                  placeHolder="ငွေပမာဏ"
                  required={true}
                  type="number"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-1/2 ">
                <UiSelect
                  name="keywords"
                  id="keywords"
                  options={keywords}
                  optionLabel="label"
                  optionValue="value"
                  placeHolder="အမြန်ရွေးပါ"
                />
              </div>
              <UiButton
                type="button"
                actionButton={true}
                NextFun={() => {
                  onSumEvent();
                }}
                title="ပေါင်းထည့်မည်"
              />
            </div>
          </form>
        </div>
        <div className="col-span-12 md:col-span-12">
          {formData.customerNm && (
            <h4 className="my-3 text-lg tracking-widest text-slate-600">
              {formData.customerNm} ၏စာရင်း{" "}
            </h4>
          )}
          <SelectTable>
            <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
              <TableRow className="bg-slate-100">
                <TableCell isHeader={true}>စဉ်</TableCell>
                <TableCell isHeader={true}>ရွေးချယ်ထားသောဂဏန်း</TableCell>
                <TableCell isHeader={true}>ငွေပမာဏ(ကျပ်)</TableCell>
                <TableCell isHeader={true}>ပြင်/ဖျက်</TableCell>
              </TableRow>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              {/* {formData.selectedFormData.map((s, i) => (
                <TableRow key={i}>
                  <TableCell isHeader={false}>{i + 1}</TableCell>
                  <TableCell isHeader={false}>{s.num}</TableCell>
                  <TableCell isHeader={false}>{s.amount}</TableCell>
                  <TableCell isHeader={false}>
                    <button
                      onClick={() => {
                        filterFormData(s);
                      }}
                    >
                      <TrashIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))} */}
            </tbody>
          </SelectTable>
          <div className="flex justify-start w-full py-4 my-2 space-x-2 border-t border-slate-300">
            <span className="text-sm text-slate-500">စုစုပေါင်း</span>{" "}
            <span className="text-sm font-bold text-red-700">
              {" "}
              {formData.totalAmount} ကျပ်{" "}
            </span>
          </div>
          <div>
            <UiButton
              title="အတည်ပြုမည်"
              actionButton={true}
              NextFun={() => console.log("ok")}
            />
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
}

export default Slot2D;
