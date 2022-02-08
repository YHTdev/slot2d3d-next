import Card, { CardBody, CardHeader } from "../Card";
import SelectTable, { TableCell, TableRow } from "../SelectTable";

import Image01 from "../../public/images/adminUsers/user-28-01.jpg";
import Image02 from "../../public/images/adminUsers/user-28-02.jpg";
import Image03 from "../../public/images/adminUsers/user-28-03.jpg";
import Image04 from "../../public/images/adminUsers/user-28-04.jpg";
import Image05 from "../../public/images/adminUsers/user-28-05.jpg";
import Image06 from "../../public/images/adminUsers/user-28-06.jpg";
import Image07 from "../../public/images/adminUsers/user-28-07.jpg";
import Image08 from "../../public/images/adminUsers/user-28-08.jpg";
import Image09 from "../../public/images/adminUsers/user-28-09.jpg";
import Image10 from "../../public/images/adminUsers/user-28-10.jpg";
import Image from "next/image";
import PaginationClassic from "../Pagination/PaginationClassic";
import { RefreshIcon } from "@heroicons/react/outline";
import SearchForm from "../SearchForm";

const AgentUserLists = () => {
  const customers = [
    {
      id: "1",
      image: Image02,
      name: "ကောင်းမြင့်သူ",
      email: "",
      phoneNumber: "09123456789",
      nrc: "12/OUKAMA(N)123456",
      address:
        "Na Ba( 17),Pyihtungsu St,Natkyikone(Burma) Ward Township: Mohnyin State: Kachin",
    },
    {
      id: "2",
      image: Image02,
      name: "Aung Paing Zaw",
      email: "",
      phoneNumber: "09123456789",
      nrc: "12/OUKAMA(N)123456",
      address:
        "Na Ba( 17),Pyihtungsu St,Natkyikone(Burma) Ward Township: Mohnyin State: Kachin Natkyikone(Burma)",
    },
    {
      id: "3",
      image: Image03,
      name: "Aung Paing Zaw",
      email: "michawlzhon933@gmail.com",
      phoneNumber: "09123456789",
      nrc: "12/OUKAMA(N)123456",
      address:
        "Na Ba( 17),Pyihtungsu St,Natkyikone(Burma) Ward Township: Mohnyin State: Kachin Natkyikone(Burma)",
    },
  ];
  return (
    <>
      <Card className={`col-span-full`}>
        <CardHeader className={`flex items-center justify-between`}>
          <h2 className="font-semibold text-slate-800">အေးဂျင့် စားရင်းများ</h2>
          <div className="flex items-center space-x-4">
            <SearchForm />
            <button className="p-1 rounded-full text-slate-200 bg-slate-500">
              <RefreshIcon className="w-5 h-5 " />
            </button>
          </div>
        </CardHeader>
        <CardBody>
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
                <TableCell isHeader={true}>ဖုန်းနံပါတ်</TableCell>
                <TableCell isHeader={true}>မှတ်ပုံတင်အမှတ်</TableCell>
                <TableCell isHeader={true}>လိပ်စာ</TableCell>
                <TableCell isHeader={true}>အီးမေးလ်</TableCell>
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
                    <div className="text-left">{customer.phoneNumber}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left">{customer.nrc}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left max-w-md truncate ...">
                      {customer.address}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left ">
                      {`${customer.email}` ? `${customer.email}` : `-`}
                    </div>
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
        </CardBody>
      </Card>
    </>
  );
};

export default AgentUserLists;
