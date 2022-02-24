import React, { useCallback, useEffect, useState } from "react";

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

import { Instance } from "../../../Services";
import { each, find } from "lodash";

function Slot3D() {
  const [sessions, setSessions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  console.log("KeyWords =>", keywords);

  const { Nums } = useSelector((state) => state.management);
  const threeDNums = Nums.threeD;
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    customerNm: "",
    betOnThreeDNumber: [],
    sessionId: "",
    amount: 0,
    keywords: [],
    totalAmount: 0,
    selectedNum: "",
  });

  const getSessions = useCallback(() => {
    Instance({
      url: "/settings/sessions/get3dSessions",
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

  const filterFormData = (s) => {
    const filteredArray = formData.betOnThreeDNumber.filter(
      (bet) => bet.threeDNumerId !== s.threeDNumerId
    );
    let totalAmount = 0;
    each(filteredArray, (f) => {
      totalAmount += parseInt(f.amount);
    });
    setFormData({
      ...formData,
      totalAmount: totalAmount,
      betOnThreeDNumber: filteredArray,
    });
  };
  const onSumEvent = () => {
    if (formData.selectedNum && formData.amount > 0 && formData.sessionId) {
      const selectedNumObj = find(
        threeDNums,
        (num) => num.num === formData.selectedNum
      );
      if (selectedNumObj) {
        const IsExist = find(
          formData.betOnThreeDNumber,
          (bet) => bet.threeDNumerId === selectedNumObj.id
        );
        if (IsExist) {
          addToast("ထည့်ပြီးသားဂဏန်းဖြစ်သည်", {
            appearance: "warning",
            autoDismiss: true,
          });
        } else {
          let betOnThreeDNumberArray = formData.betOnThreeDNumber;
          const pushObj = {
            threeDNumerId: selectedNumObj.id,
            amount: formData.amount,
          };
          betOnThreeDNumberArray.push(pushObj);
          let totalAmount = 0;
          each(betOnThreeDNumberArray, (bet) => {
            totalAmount += parseInt(bet.amount);
          });
          setFormData({
            ...formData,
            betOnThreeDNumber: betOnThreeDNumberArray,
            totalAmount: totalAmount,
            amount: 0,
            selectedNum: "",
          });
        }
      } else {
        addToast("ဂဏန်းထည့်ခြင်းမှားယွင်းနေပါသည်", {
          appearance: "warning",
          autoDismiss: false,
        });
      }
    } else if (
      formData.keywords.length > 0 &&
      formData.selectedNum &&
      formData.amount > 0 &&
      formData.sessionId
    ) {
    } else if (formData.keywords && formData.amount > 0 && formData.sessionId) {
    } else {
      addToast("သေချာစွာဖြည့်ပါ", { appearance: "warning", autoDismiss: true });
    }
  };

  const getKeywords = useCallback(() => {
    Instance({
      url: "/settings/keywords/get3d_keywords",
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
  const SubmitForm = () => {
    try {
      if (
        formData.betOnThreeDNumber.length > 0 &&
        formData.sessionId &&
        formData.customerNm &&
        formData.totalAmount
      ) {
        Instance({
          url: "/agent/Bet/3D/bet3DNum",
          method: "POST",
          data: {
            customerNm: formData.customerNm,
            sessionId: formData.sessionId,
            totalAmt: formData.totalAmount,
            betOnThreeDNumber: formData.betOnThreeDNumber,
            agentId: user ? user.id : null,
          },
        })
          .then((res) => {
            if (res.data && res.data.statusCode === 200) {
              addToast(res.data.message, {
                appearance: "success",
                autoDismiss: true,
              });
              setFormData({
                customerNm: "",
                betOnThreeDNumber: [],
                sessionId: "",
                amount: 0,
                keywords: [],
                totalAmount: 0,
                selectedNum: "",
              });
            } else {
              addToast(res.data.message, {
                appearance: "warning",
                autoDismiss: true,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            addToast("တခုခုမှားယွင်းနေပါသည်", {
              appearance: "warning",
              autoDismiss: true,
            });
          });
      }
    } catch (error) {
      console.log(error);
      addToast("တခုခုမှားယွင်းနေပါသည်", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <ManagementLayout title="3D ထိုးရန်" routes={routes.threeDBetRoutes}>
      <div className="flex flex-row items-center justify-between mb-8">
        {/* <div className="mb-8 sm:flex sm:justify-between sm:items-center"> */}
        {/* Left: Title */}
        <div className="flex items-center content-center justify-end w-full"></div>
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
                <UiInput
                  id="selectedNum"
                  name="selectedNum"
                  formData={formData}
                  setFromData={setFormData}
                  placeHolder="ဂဏန်းရိုက်ထည့်ပါ"
                  required={true}
                  type="text"
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
              {formData.customerNm} ၏စာရင်း
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
              {formData.betOnThreeDNumber.map((s, i) => (
                <TableRow key={i}>
                  <TableCell isHeader={false}>{i + 1}</TableCell>
                  <TableCell isHeader={false}>
                    {find(threeDNums, (num) => num.id === s.threeDNumerId).num}
                  </TableCell>
                  <TableCell isHeader={false}>{s.amount}</TableCell>
                  <TableCell isHeader={false}>
                    <button
                      onClick={() => {
                        filterFormData(s);
                      }}>
                      <TrashIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </SelectTable>
          <div className="flex justify-start w-full py-4 my-2 space-x-2 border-t border-slate-300">
            <span className="text-sm text-slate-500">စုစုပေါင်း</span>
            <span className="text-sm font-bold text-red-700">
              {formData.totalAmount} ကျပ်
            </span>
          </div>
          <div>
            <UiButton
              title="အတည်ပြုမည်"
              actionButton={true}
              NextFun={() => SubmitForm()}
            />
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
}
export default Slot3D;
