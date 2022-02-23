import SelectTable, { TableCell, TableRow } from "../SelectTable";

import { format } from "date-fns";
import { useState } from "react";
import MyModal, { ModalBody, ModalTitle } from "../Modal";

const TwoDLeger = ({ data }) => {
  const [legerState, setLegerState] = useState([]);
  const [show, setShow] = useState(false);

  const OnSelectLeger = (data) => {
    setShow(!show);
    setLegerState(data);
  };
  return (
    <>
      <SelectTable>
        <thead className="text-sm font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
          <TableRow>
            <TableCell isHeader={true} className={` w-px`}>
              <div className="flex items-center">
                <label className="inline-flex">
                  <span className="sr-only">Select all</span>
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    // checked={selectAll}
                    // onChange={handleSelectAll}
                  />
                </label>
              </div>
            </TableCell>

            <TableCell isHeader={true}>အမည်</TableCell>
            <TableCell isHeader={true}>ဂဏန်း</TableCell>
            <TableCell className="text-right px-4" isHeader={true}>
              ပမာဏ(ကျပ်)
            </TableCell>
            <TableCell isHeader={true}>နေ့ရက်</TableCell>
          </TableRow>
        </thead>
        {data && (
          <tbody className="text-sm divide-y divide-slate-200">
            {data.leger.map((l, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select</span>
                      <input
                        id={l.id}
                        className="form-checkbox"
                        type="checkbox"
                        // onChange={customer.handleClick}
                        // checked={customer.isChecked}
                      />
                    </label>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="font-medium text-slate-800">
                    {l.customerNm}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="text-left">
                    <button
                      onClick={() => {
                        OnSelectLeger(l.betOnTwoDNumber);
                      }}
                      className="rounded-full text-slate-400 hover:text-slate-500"
                    >
                      <span className="sr-only">Menu</span>
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="2" />
                        <circle cx="10" cy="16" r="2" />
                        <circle cx="22" cy="16" r="2" />
                      </svg>
                    </button>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-right px-4 result_font">
                    {l.totalAmt}
                  </div>
                </TableCell>

                <TableCell>
                  <span className="result_font">
                    {format(new Date(l.updatedAt), "yyyy-MM-dd")}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        )}
        <thead className="text-sm font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <span className="text-lg text-slate-500">စုစုပေါင်း</span>
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">
              {data && (
                <span className="text-yellow-600 text-lg result_font">
                  {data.grandTotal}
                </span>
              )}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </thead>
      </SelectTable>
      <div className="mt-8"></div>
      <MyModal isModalOpen={show} setIsModalOpen={setShow}>
        <ModalTitle>
          <span>ရွေးချယ်ထားသောဂဏန်းများ</span>
        </ModalTitle>
        <ModalBody>
          <SelectTable>
            <thead className="text-sm font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
              <TableRow>
                <TableCell isHeader={true}>
                  <span>ဂဏန်း</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>ပမာဏ</span>
                </TableCell>
              </TableRow>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              {legerState.map((d, i) => (
                <TableRow key={i}>
                  <TableCell>
                    {
                      d.TwoDNum && 
                      <span>{d.TwoDNum.num}</span>
                    }
                  </TableCell>
                  <TableCell>
                    <span>{d.amount}</span>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </SelectTable>
        </ModalBody>
      </MyModal>
    </>
  );
};

export default TwoDLeger;
