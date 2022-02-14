import Card, { CardBody, CardHeader } from "../Card";
import SelectTable, { TableCell, TableRow } from "../SelectTable";

import Image02 from "../../public/images/adminUsers/user-28-02.jpg";
import Image03 from "../../public/images/adminUsers/user-28-03.jpg";

import PaginationClassic from "../Pagination/PaginationClassic";

const TwoDLeger = () => {
  const customers = [
    {
      id: "1",
      image: Image02,
      name: "ကောင်းမြင့်သူ",
      num:'34',
      amount:70000
    },
    {
      id: "2",
      image: Image02,
      name: "Aung Paing Zaw",
      num:'35',
      amount:70000
    },
    {
      id: "3",
      image: Image03,
      name: "Aung Paing Zaw",
      num:'32',
      amount:70000
    },
  ];
  return (
    <>
          <SelectTable>
            <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
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
                <TableCell isHeader={true}>ပမာဏ</TableCell>
                <TableCell isHeader={true} className="sr-only">
                  Menu
                </TableCell>
              </TableRow>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              {customers.map((customer, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center">
                      <label className="inline-flex">
                        <span className="sr-only">Select</span>
                        <input
                          id={customer.id}
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
                      {customer.name}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="text-left">{customer.num}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left">{customer.amount}</div>
                  </TableCell>
                 

                  <TableCell>
                    {/* Menu button */}
                    <button className="rounded-full text-slate-400 hover:text-slate-500">
                      <span className="sr-only">Menu</span>
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="2" />
                        <circle cx="10" cy="16" r="2" />
                        <circle cx="22" cy="16" r="2" />
                      </svg>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </SelectTable>
          <div className="mt-8">
            <PaginationClassic />
          </div>
     
    </>
  );
};

export default TwoDLeger;
