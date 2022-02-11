import React, { useState } from "react";
import Layout from "../../../../components/layout";
import ReactSelect from "react-select";
import Slot2dLimitations from "../../../../data/2dnumber.json";
import Timer from "../../../../components/CountDown";
import { each, find } from "lodash";
function Slot2D() {
  const [formData, setFormData] = useState({
    selectedFormData: [],
    amount: "",
    sessionId: "",
    firstNum: "",
    secondNum: "",
    totalAmount: 0,
    name:''
  });
  const [showLimit, setShowLimit] = useState(false);
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
      formData.sessionId
    ) {
      let selectedFormData = formData.selectedFormData;
      const inValidData = find(selectedFormData, {
        num: formData.firstNum + formData.secondNum,
      });

      const params = {
        amount: formData.amount,
        num: formData.firstNum + formData.secondNum,
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
    <Layout>
      <div className="flex flex-row items-center justify-between mb-8">
        {/* <div className="mb-8 sm:flex sm:justify-between sm:items-center"> */}
        {/* Left: Title */}
        <div className="flex w-full justify-between items-center content-center">
          <h1 className="text-lg font-bold tracking-wider md:text-3xl text-slate-800">
            2D ဂဏန်းများရွေးရန်
          </h1>
        </div>
        <div className="flex justify-end flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0 text-sm tracking-widest">
          <span>ပိတ်ရန်ကျန်ချိန်</span>
          <Timer hour={1} minute={30} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <form className="col-span-12 md:col-span-6 px-4 py-4 bg-white rounded-md">
          <div className="flex w-full flex-col justify-start space-y-5">
            <ReactSelect
              id="sessionId"
              name="sessionId"
              options={Sessions}
              onChange={(option) => {
                setFormData({ ...formData, sessionId: option });
              }}
              placeholder="အချိန်ရွေးချယ်ပေးပါ"
            />
            <input type="text"  name="name"
              id="name"   className="px-2 py-1 focus:outline-none rounded-sm border border-slate-400 hover:border-l-slate-900 w-full"
              required placeholder="အမည်" value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }} />
            <input
              type="number"
              placeholder="ငွေပမာဏ(အနည်းဆုံး 1000 ကျပ်)"
              className="px-2 py-1 focus:outline-none rounded-sm border border-slate-400 hover:border-l-slate-900 w-full"
              required
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
            <div className="w-full flex flex-row justify-start space-x-2 ">
              <label htmlFor="" className="text-sm text-slate-600">ဂဏန်းရွေးရန်</label>
              <ReactSelect
                id="slotOption1"
                name="slotOption2"
                onChange={(value) => {
                  setFormData({ ...formData, firstNum: value.value });
                }}
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.label}
                options={SlotOptions}
                placeholder="ပ"
              />
              <ReactSelect
                onChange={(value) => {
                  setFormData({ ...formData, secondNum: value.value });
                }}
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.label}
                options={SlotOptions}
                placeholder="ဒု"
              />
              <button
                onClick={() => onSumEvent()}
                type="button"
                className="px-2 py-1 border border-slate-400 text-slate-400 hover:text-slate-900 hover:border-slate-900 rounded-sm"
              >
                {" "}
                ပေါင်းထည့်ရန်{" "}
              </button>
            </div>
          </div>
        </form>
        <div className="col-span-12 md:col-span-6 bg-white rounded-md px-4 py-4">
          {
            formData.name &&
            <h4 className="text-lg text-slate-600 my-3 tracking-widest">{formData.name} ၏စာရင်း </h4>
          }
          <div className="grid grid-flow-row grid-cols-12">
            <div className="col-span-1 border border-slate-600 px-1 py-1">
              <span className="text-center flex w-full justify-center">
                စဉ်
              </span>
            </div>
            <div className="col-span-4 border border-slate-600 px-1 py-1">
              <span className=" text-center flex w-full justify-center">
                ဂဏန်း
              </span>
            </div>
            <div className="col-span-4 border border-slate-600 px-1 py-1">
              <span className="text-center flex w-full justify-center">
                ငွေပမာဏ
              </span>
            </div>
            <div className="col-span-3 border border-slate-600 px-1 py-1">
              <span className="text-center flex w-full justify-center">
                {" "}
                ပြင်/ဖျက်
              </span>
            </div>
          </div>
          {/* body */}
          {formData.selectedFormData.map((s, i) => (
            <div className="grid grid-flow-row grid-cols-12" key={i}>
              <div className="col-span-1 border border-slate-400 px-1 py-1">
                <span>{i + 1} </span>
              </div>
              <div className="col-span-4 border border-slate-400 px-1 py-1">
                <span>{s.num}</span>
              </div>
              <div className="col-span-4 border border-slate-400 px-1 py-1">
                <span>{s.amount} ကျပ်</span>
              </div>
              <div className="col-span-3 border border-slate-400 px-1 py-1">
                <div className="flex w-full justify-evenly items-center content-center">
                  <button
                    onClick={() => {
                      filterFormData(s);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-archive"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* body */}
          {/* footer */}
          <div className="grid grid-flow-row grid-cols-12">
            <div className="col-span-6 border border-slate-400 px-1 py-1">
              <span>စုစုပေါင်း</span>
            </div>
            <div className="col-span-6 border border-slate-400 px-1 py-1">
              <span className="text-red-400 text-sm">{formData.totalAmount} ကျပ်</span>
            </div>
          </div>
          {/* tfooter */}
           <button className="bg-slate-600 hover:bg-slate-800 px-2 py-2 my-4 text-white rounded-md">
                  <span className="text-sm tracking-widest">ထိုးမည်</span>
           </button>
        </div>
        <div className="col-span-12 md:col-span-12 px-4 py-4 bg-white rounded-md">
          <div className="flex w-full justify-between items-center content-center my-4">
            <h4 className="text-slate-700 text-lg tracking-widest">
              ဂဏန်းကန့်သတ်ချက်
            </h4>
            <button
              onClick={() => {
                setShowLimit(!showLimit);
              }}
              className="border border-slate-500 rounded-full px-2 py-2"
            >
              {showLimit ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </button>
          </div>
          {showLimit && (
            <div className="grid grid-cols-12 gap-3">
              {Slot2dLimitations.map((s, i) => (
                <div className="col-span-2 md:col-span-1 mb-4" key={i}>
                  <span
                    className={`rounded-md tracking-widest border-b-4 bg-slate-200 px-2 py-1 ${
                      (s.purchased / s.limit) * 100 > 30 &&
                      (s.purchased / s.limit) * 100 < 90
                        ? "border-yellow-300"
                        : (s.purchased / s.limit) * 100 > 90
                        ? "border-red-400"
                        : "border-green-400"
                    }`}
                  >
                    {s.num}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Cards */}
    </Layout>
  );
}

export default Slot2D;
