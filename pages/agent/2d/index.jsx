import React, { useCallback, useEffect, useState } from "react";

import UiSelect from "../../../components/forms/UiSelect";

import UiInput from "../../../components/forms/UiInput";
import UiButton from "../../../components/forms/UiButton";
import SelectTable, {
  TableCell,
  TableRow
} from "../../../components/SelectTable";
import ManagementLayout from "../../../components/layout/ManagementLayout";
import { useSelector } from "react-redux";
import TrashIcon from "../../../components/Icons/TrashIcon";
import { useToasts } from "react-toast-notifications";

import { Instance } from "../../../Services";
import { each, find } from "lodash";

function Slot2D() {
  const [sessions, setSessions] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const { Nums } = useSelector(state => state.management);
  const twoDNums = Nums.twoD;
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    customerNm: "",
    betOnTwoDNumber: [],
    sessionId: "",
    amount: 0,
    keywords: [],
    totalAmount: 0,
    selectedNum: ""
  });

  const getSessions = useCallback(() => {
    Instance({
      url: `/settings/sessions/get2dSessions?status=1`,
      method: "GET"
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
          setSessions(res.data.Data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const filterFormData = s => {
    const filteredArray = formData.betOnTwoDNumber.filter(
      bet => bet.twoDNumerId !== s.twoDNumerId
    );
    let totalAmount = 0;
    each(filteredArray, f => {
      totalAmount += parseInt(f.amount);
    });
    setFormData({
      ...formData,
      totalAmount: totalAmount,
      betOnTwoDNumber: filteredArray
    });
  };

  const RoundFn = () => {
    if (
      formData.selectedNum.length === 2 &&
      formData.sessionId &&
      formData.customerNm &&
      formData.amount > 0
    ) {
      let betOnTwoDNumberArray = formData.betOnTwoDNumber;
      const fNum = formData.selectedNum.split("")[0];
      const sNum = formData.selectedNum.split("")[1];
      const formatedfNum = fNum + sNum;
      const formatedSNum = sNum + fNum;
      
      if (formatedfNum === formatedSNum) {
       
        const formatNumObj = find(twoDNums, num => num.num === formatedfNum);
        if (formatNumObj) {
          const pushObj = {
            twoDNumerId: formatNumObj.id,
            amount: formData.amount
          };
          betOnTwoDNumberArray.push(pushObj);
        }
      } else {
        const formatFNumObj = find(twoDNums, num => num.num === formatedfNum);
        const formatSNumObj = find(twoDNums, num => num.num === formatedSNum);
        if (formatFNumObj) {
          const pushObj = {
            twoDNumerId: formatFNumObj.id,
            amount: formData.amount
          };
          betOnTwoDNumberArray.push(pushObj);
        }
        if (formatSNumObj) {
          const pushObj = {
            twoDNumerId: formatSNumObj.id,
            amount: formData.amount
          };
          betOnTwoDNumberArray.push(pushObj);
        }
      }
      console.log(betOnTwoDNumberArray)
      let totalAmount = formData.totalAmount;
      each(betOnTwoDNumberArray, bet => {
        totalAmount += parseInt(bet.amount);
      });
      setFormData({
        ...formData,
        betOnTwoDNumber: betOnTwoDNumberArray,
        totalAmount: totalAmount,
        amount: 0,
        selectedNum: ""
      });
    } else {
      addToast("???????????????????????????????????????????????????", { appearance: "info", autoDismiss: true });
    }
  };
  const onSumEvent = () => {
    if (
      (formData.selectedNum && formData.amount > 0 && formData.sessionId) ||
      (formData.keywords.length > 0 &&
        formData.amount > 0 &&
        formData.sessionId)
    ) {
      if (formData.selectedNum) {
        const selectedNumObj = find(
          twoDNums,
          num => num.num === formData.selectedNum
        );
        if (selectedNumObj) {
          const IsExist = find(
            formData.betOnTwoDNumber,
            bet => bet.twoDNumerId === selectedNumObj.id
          );
          if (IsExist) {
            addToast("?????????????????????????????????????????????????????????????????????", {
              appearance: "warning",
              autoDismiss: true
            });
          } else {
            let betOnTwoDNumberArray = formData.betOnTwoDNumber;
            const pushObj = {
              twoDNumerId: selectedNumObj.id,
              amount: formData.amount
            };
            betOnTwoDNumberArray.push(pushObj);
            let totalAmount = formData.totalAmount;
            each(betOnTwoDNumberArray, bet => {
              totalAmount += parseInt(bet.amount);
            });
            setFormData({
              ...formData,
              betOnTwoDNumber: betOnTwoDNumberArray,
              totalAmount: totalAmount,
              amount: 0,
              selectedNum: ""
            });
          }
        } else {
          addToast("??????????????????????????????????????????????????????????????????????????????????????????", {
            appearance: "warning",
            autoDismiss: false
          });
        }
      }
      if (formData.keywords.length > 0) {
        let betOnKeywordArray = [];
        let totalAmount = formData.totalAmount;
        each(formData.keywords, key => {
          if (key.TwoDNumer && key.TwoDNumer.id) {
            betOnKeywordArray.push({
              twoDNumerId: key.TwoDNumer.id,
              amount: formData.amount
            });
          }
        });
        each(betOnKeywordArray, betKeyword => {
          totalAmount += parseInt(betKeyword.amount);
        });
        setFormData({
          ...formData,
          keywords: [],
          amount: 0,
          totalAmount: totalAmount,
          betOnTwoDNumber: formData.betOnTwoDNumber.concat(betOnKeywordArray)
        });
      }
    } else {
      addToast("?????????????????????????????????????????????", { appearance: "warning", autoDismiss: true });
    }
  };

  const getKeywords = useCallback(() => {
    Instance({
      url: "/settings/keywords/get2d_keywords",
      method: "GET"
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
          setKeywords(res.data.Data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(
    () => {
      getSessions();
      getKeywords();
    },
    [getSessions, getKeywords]
  );

  const { routes } = useSelector(state => state.management);
  const { addToast } = useToasts();
  const SubmitForm = () => {
    try {
      if (
        formData.betOnTwoDNumber.length > 0 &&
        formData.sessionId &&
        formData.customerNm &&
        formData.totalAmount
      ) {
        Instance({
          url: "/agent/Bet/2D/bet2DNum",
          method: "POST",
          data: {
            customerNm: formData.customerNm,
            sessionId: formData.sessionId,
            totalAmt: formData.totalAmount,
            betOnTwoDNumber: formData.betOnTwoDNumber,
            agentId: user ? user.id : null
          }
        })
          .then(res => {
            if (res.data && res.data.statusCode === 200) {
              addToast(res.data.message, {
                appearance: "success",
                autoDismiss: true
              });
              setFormData({
                customerNm: "",
                betOnTwoDNumber: [],
                sessionId: "",
                amount: 0,
                keywords: [],
                totalAmount: 0,
                selectedNum: ""
              });
            } else {
              addToast(res.data.message, {
                appearance: "warning",
                autoDismiss: true
              });
            }
          })
          .catch(err => {
            console.log(err);
            addToast("???????????????????????????????????????????????????????????????", {
              appearance: "warning",
              autoDismiss: true
            });
          });
      }
    } catch (error) {
      console.log(error);
      addToast("???????????????????????????????????????????????????????????????", {
        appearance: "error",
        autoDismiss: true
      });
    }
  };

  return (
    <ManagementLayout title="2D ?????????????????????" routes={routes.twoDBetRoutes}>
       
      <div className="flex flex-row items-center justify-between mb-8">
        {/* <div className="mb-8 sm:flex sm:justify-between sm:items-center"> */}
        {/* Left: Title */}
        <div className="flex items-center content-center justify-start w-full">
         {
           sessions.length===0 &&  <span className="text-sm font-bold text-red-400">*????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????....</span>
         }
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
              options={sessions.filter(s => s.status === true)}
              optionLabel="name"
              optionValue="id"
              placeHolder="????????????????????????????????????????????????"
            />
            <UiInput
              name="customerNm"
              id="customerNm"
              formData={formData}
              setFromData={setFormData}
              placeHolder="??????????????????????????????"
              required={true}
              type="text"
            />

            <UiInput
              name="amount"
              id="amount"
              formData={formData}
              setFromData={setFormData}
              placeHolder="?????????????????????"
              required={true}
              type="number"
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <UiInput
                  id="selectedNum"
                  name="selectedNum"
                  formData={formData}
                  setFromData={setFormData}
                  placeHolder="????????????????????????????????????????????????"
                  required={true}
                  type="text"
                  maxLength={2}
                />
              </div>

              <div className="w-full">
                <UiButton
                  className='w-full'
                  title="R"
                  actionButton={true}
                  NextFun={() => RoundFn()}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="w-full">
                <UiSelect
                  name="keywords"
                  id="keywords"
                  options={keywords}
                  optionLabel="name"
                  formData={formData}
                  setFromData={setFormData}
                  optionValue="twoDNumber"
                  placeHolder="?????????????????????????????????"
                />
              </div>
              <UiButton
                className='w-full'
                type="button"
                actionButton={true}
                NextFun={() => {
                  onSumEvent();
                }}
                title="???????????????????????????????????????"
              />
            </div>
          </form>
        </div>
        <div className="col-span-12 md:col-span-12">
          {formData.customerNm &&
            <h4 className="my-3 text-lg tracking-widest text-slate-600">
              {formData.customerNm} ?????????????????????{" "}
            </h4>}
          <SelectTable>
            <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
              <TableRow className="bg-slate-100">
                <TableCell isHeader={true}>?????????</TableCell>
                <TableCell isHeader={true}>?????????????????????????????????????????????????????????</TableCell>
                <TableCell isHeader={true}>?????????????????????(????????????)</TableCell>
                <TableCell isHeader={true}>????????????/????????????</TableCell>
              </TableRow>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              {formData.betOnTwoDNumber.map((s, i) =>
                <TableRow key={i}>
                  <TableCell isHeader={false}>
                    {i + 1}
                  </TableCell>
                  <TableCell isHeader={false}>
                    {find(twoDNums, num => num.id === s.twoDNumerId).num}
                  </TableCell>
                  <TableCell isHeader={false}>
                    {s.amount}
                  </TableCell>
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
              )}
            </tbody>
          </SelectTable>
          <div className="flex justify-start w-full py-4 my-2 space-x-2 border-t border-slate-300">
            <span className="text-sm text-slate-500">??????????????????????????????</span>{" "}
            <span className="text-sm font-bold text-red-700">
              {" "}{formData.totalAmount} ????????????{" "}
            </span>
          </div>
          <div>
            <UiButton
              disabled={sessions.length===0}
              title="??????????????????????????????"
              actionButton={true}
              NextFun={() => SubmitForm()}
            />
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
}

export default Slot2D;
