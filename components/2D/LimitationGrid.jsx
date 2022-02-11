import React, { useState } from "react";

import FillCircle from "../Icons/FillCircle";
import MyModal, { ModalBody, ModalTitle } from "../Modal";

function LimitationGrid({
  data = [],
  className,
  isColorModalOpen,
  setIsColorModalOpen,
}) {
  const [detailModal, setDetailModal] = useState(false);
  const [selectedNum, setSelectedNum] = useState();
  const getColor = (limit, Purchase) => {
    const percentage = (Purchase / limit) * 100;
    if (percentage < 30) {
      return "border-green-400";
    } else if (percentage > 30 && percentage < 50) {
      return "border-yellow-400";
    } else if (percentage > 50 && percentage < 90) {
      return "border-yellow-900";
    } else if (percentage > 90) {
      return "border-red-400";
    } else {
      return "border-green-400";
    }
  };
  const selectedEvent = (d) => {
    setDetailModal(!detailModal);
    setSelectedNum(d);
  };
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {data.map((d, i) => (
          <div className="col-span-2 md:col-span-1" key={i}>
            <button
              onClick={() => {
                selectedEvent(d);
              }}
              className={`flex justify-center w-full flex-col items-center content-center px-2 py-4 bg-slate-100 border-b-4 rounded-md ${getColor(
                d.limit,
                d.purchased
              )}`}
            >
              <span className="text-sm font-semibold tracking-widest">
                {d.num}
              </span>
            </button>
          </div>
        ))}
      </div>
      <MyModal
        isModalOpen={isColorModalOpen}
        setIsModalOpen={setIsColorModalOpen}
      >
        <ModalTitle> အရောင်သတ်မှတ်ချက် </ModalTitle>
        <ModalBody>
          <div className="flex flex-col justify-start  space-y-3">
            <h6> သတ်မှတ်ချက် ၏ </h6>
            <div className="flex flex-row justify-start items-center content-center space-x-4">
              <FillCircle className="text-green-400" />
              <span> ၃၀ % အောက်ဖြစ်သည် </span>
            </div>
            <div className="flex flex-row justify-start items-center content-center space-x-4">
              <FillCircle className="text-yellow-400" />
              <span> ၃၀ % အထက် နှင့် ၅၀ % အောက်ဖြစ်သည် </span>
            </div>
            <div className="flex flex-row justify-start items-center content-center space-x-4">
              <FillCircle className="text-yellow-900" />
              <span> ၅၀ % အထက် နှင့် ၉၀ % အောက်ဖြစ်သည် </span>
            </div>
            <div className="flex flex-row justify-start items-center content-center space-x-4">
              <FillCircle className="text-red-400" />
              <span> ၉၀ % အထက်ဖြစ်သည် </span>
            </div>
          </div>
        </ModalBody>
      </MyModal>
      <MyModal isModalOpen={detailModal} setIsModalOpen={setDetailModal}>
        {selectedNum && (
          <ModalBody>
            <div className="flex flex-col space-y-4 justify-start ">
              <div className="flex flex-row space-x-4 justify-start items-center content-center">
                <span className="text-slate-500 text-sm tracking-widest">
                  ဂဏန်း
                </span>
                <span className="text-slate-800 text-sm font-semibold tracking-widest">
                  {selectedNum.num}
                </span>
              </div>
              <div className="flex flex-row space-x-4 justify-start items-center content-center">
                <span className="text-slate-500 text-sm tracking-widest">
                  ဝယ်ယူပြီးသောပမာဏ
                </span>
                <span className="text-slate-800 text-sm font-semibold tracking-widest">
                  {selectedNum.purchased} ကျပ်
                </span>
              </div>
              <div className="flex flex-row space-x-4 justify-start items-center content-center">
                <span className="text-slate-500 text-sm tracking-widest">
                  သတ်မှတ်ချက်
                </span>
                <span className="text-slate-800 text-sm font-semibold tracking-widest">
                  {selectedNum.limit} ကျပ်
                </span>
              </div>
            </div>
          </ModalBody>
        )}
      </MyModal>
    </div>
  );
}

export default LimitationGrid;
