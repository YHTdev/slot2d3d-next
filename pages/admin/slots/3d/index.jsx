import React, { useState } from "react";
import Timer from "../../../../components/CountDown";
import { each, find } from "lodash";
import ManagementLayout from "../../../../components/layout/ManagementLayout";
import { useSelector } from "react-redux";
import UiSelect from "../../../../components/forms/UiSelect";
import UiInput from "../../../../components/forms/UiInput";
import UiButton from "../../../../components/forms/UiButton";
import SelectTable, {
  TableCell,
  TableRow,
} from "../../../../components/SelectTable";
import TrashIcon from "../../../../components/Icons/TrashIcon";
import Card, { CardBody, CardHeader } from "../../../../components/Card";
function Slot3D() {
  const { routes } = useSelector((state) => state.management);
  const [formData, setFormData] = useState({
    selectedFormData: [],
    amount: "",
    sessionId: "",
    firstNum: "",
    secondNum: "",
    thirdNum: "",
    totalAmount: 0,
    name: "",
  });

  const Sessions = [
    {
      label: "ပထမအပတ်",
      value: "1",
    },
    {
      label: "ဒုတိယအပတ်",
      value: "2",
    },
  ];
  const SlotOptions = [
    {
      label: "0",
      value: "0",
    },
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
  ];

  const filterFormData = (obj) => {
    const filteredFormData = formData.selectedFormData.filter(
      (value) => value.num !== obj.num
    );

    let totalAmount = 0;
    each(filteredFormData, (e) => {
      totalAmount += parseInt(e.amount);
    });
    setFormData({
      ...formData,
      selectedFormData: filteredFormData,
      totalAmount: totalAmount,
    });
  };

  const onSumEvent = () => {
    if (
      formData.amount &&
      formData.firstNum &&
      formData.secondNum &&
      formData.thirdNum &&
      formData.sessionId
    ) {
      let selectedFormData = formData.selectedFormData;
      const inValidData = find(selectedFormData, {
        num: formData.firstNum + formData.secondNum + formData.thirdNum,
      });

      const params = {
        amount: formData.amount,
        num: formData.firstNum + formData.secondNum + formData.thirdNum,
      };

      if (inValidData) {
        alert("ထည့်ပီးသားဂဏန်းဖြစ်သည်");
      } else {
        selectedFormData.push(params);
        setFormData({ ...formData, selectedFormData: selectedFormData });
      }
      let totalAmount = 0;
      formData.selectedFormData.forEach((element) => {
        totalAmount += parseInt(element.amount);
      });
      setFormData({ ...formData, totalAmount: totalAmount });
    } else {
      alert("သေချာစွာဖြည့်ပါ");
    }
  };
  return (
    <ManagementLayout routes={routes.threeDBetRoutes} title="3D ထိုးမည်">
      <div className="flex flex-row items-center justify-between mb-8">
        <div className="flex w-full justify-end items-center content-center"></div>
        <div className="flex justify-end w-full items-center content-center flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0 text-sm tracking-widest">
          <span>ပိတ်ရန်ကျန်ချိန်</span>
          <Timer hour={1} minute={30} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <form className="flex w-full flex-col justify-start space-y-5">
            <UiSelect
              name="sessionId"
              id="sessionId"
              formData={formData}
              setFromData={setFormData}
              options={Sessions}
              optionLabel="label"
              optionValue="value"
              placeHolder="အချိန်ရွေးချယ်ပါ"
            />
            <UiInput
              name="name"
              id="name"
              formData={formData}
              setFromData={setFormData}
              placeHolder="အမည်ထည့်ပါ"
              required={true}
              type="text"
            />
            <UiInput
              name="amount"
              id="amount"
              formData={formData}
              setFromData={setFormData}
              placeHolder="ငွေပမာဏ(အနည်းဆုံး1000) ကျပ်ထည့်သွင်းပါ"
              required={true}
              type="number"
            />
            <div className="flex items-center content-center flex-row space-x-3 justify-start">
              <label
                className="tex-sm text-slate-600 tracking-widest"
                htmlFor=""
              >
                ထိုးမည့်ဂဏန်း
              </label>
              <UiSelect
                name="firstNum"
                id="firstNum"
                formData={formData}
                setFromData={setFormData}
                options={SlotOptions}
                optionLabel="label"
                optionValue="value"
                placeHolder="ပ"
              />
              <UiSelect
                name="secondNum"
                id="secondNum"
                formData={formData}
                setFromData={setFormData}
                options={SlotOptions}
                optionLabel="label"
                optionValue="value"
                placeHolder="ဒု"
              />
              <UiSelect
                name="thirdNum"
                id="thirdNum"
                formData={formData}
                setFromData={setFormData}
                options={SlotOptions}
                optionLabel="label"
                optionValue="value"
                placeHolder="တ"
              />
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
        <div className="col-span-12">
          <Card>
            <CardHeader>
              {formData.name && (
                <h4 className="text-lg text-slate-600 my-3 tracking-widest">
                  {formData.name} ၏စာရင်း{" "}
                </h4>
              )}
            </CardHeader>
            <CardBody>
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
                {formData.selectedFormData.map((s, i) => (
                  i<10 &&
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
                ))}
                </tbody>
              </SelectTable>
              <div className="flex justify-start w-full space-x-2 border-t border-slate-300 py-4 my-2">
                <span className="text-sm text-slate-500">စုစုပေါင်း</span>{" "}
                <span className="text-sm font-bold text-red-700">
                  {" "}
                  {formData.totalAmount} ကျပ်{" "}
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </ManagementLayout>
  );
}

export default Slot3D;
