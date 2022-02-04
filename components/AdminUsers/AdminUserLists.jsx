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

const AdminUserLists = () => {
  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Patricia Semklo",
      email: "patricia.semklo@app.com",
      location: "🇬🇧 London, UK",
      orders: "24",
      lastOrder: "#123567",
      spent: "$2,890.66",
      refunds: "-",
      fav: true,
    },
    {
      id: "1",
      image: Image02,
      name: "Dominik Lamakani",
      email: "dominik.lamakani@gmail.com",
      location: "🇩🇪 Dortmund, DE",
      orders: "77",
      lastOrder: "#779912",
      spent: "$14,767.04",
      refunds: "4",
      fav: false,
    },
    {
      id: "2",
      image: Image03,
      name: "Ivan Mesaros",
      email: "imivanmes@gmail.com",
      location: "🇫🇷 Paris, FR",
      orders: "44",
      lastOrder: "#889924",
      spent: "$4,996.00",
      refunds: "1",
      fav: true,
    },
    {
      id: "3",
      image: Image04,
      name: "Maria Martinez",
      email: "martinezhome@gmail.com",
      location: "🇮🇹 Bologna, IT",
      orders: "29",
      lastOrder: "#897726",
      spent: "$3,220.66",
      refunds: "2",
      fav: false,
    },
    {
      id: "4",
      image: Image05,
      name: "Vicky Jung",
      email: "itsvicky@contact.com",
      location: "🇬🇧 London, UK",
      orders: "22",
      lastOrder: "#123567",
      spent: "$2,890.66",
      refunds: "-",
      fav: true,
    },
    {
      id: "5",
      image: Image06,
      name: "Tisho Yanchev",
      email: "tisho.y@kurlytech.com",
      location: "🇬🇧 London, UK",
      orders: "14",
      lastOrder: "#896644",
      spent: "$1,649.99",
      refunds: "1",
      fav: true,
    },
    {
      id: "6",
      image: Image07,
      name: "James Cameron",
      email: "james.ceo@james.tech",
      location: "🇫🇷 Marseille, FR",
      orders: "34",
      lastOrder: "#136988",
      spent: "$3,569.87",
      refunds: "2",
      fav: true,
    },
    {
      id: "7",
      image: Image08,
      name: "Haruki Masuno",
      email: "haruki@supermail.jp",
      location: "🇯🇵 Tokio, JP",
      orders: "112",
      lastOrder: "#442206",
      spent: "$19,246.07",
      refunds: "6",
      fav: false,
    },
    {
      id: "8",
      image: Image09,
      name: "Joe Huang",
      email: "joehuang@hotmail.com",
      location: "🇨🇳 Shanghai, CN",
      orders: "64",
      lastOrder: "#764321",
      spent: "$12,276.92",
      refunds: "-",
      fav: true,
    },
    {
      id: "9",
      image: Image10,
      name: "Carolyn McNeail",
      email: "carolynlove@gmail.com",
      location: "🇮🇹 Milan, IT",
      orders: "19",
      lastOrder: "#908764",
      spent: "$1,289.97",
      refunds: "2",
      fav: false,
    },
  ];
  return (
    <>
      <Card className={`col-span-full`}>
        <CardHeader>
          <h2 className="font-semibold text-slate-800">Admin Users Lists</h2>
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
                <TableCell isHeader={true} className={` w-px`}>
                  <span className="sr-only ">Favourite</span>
                </TableCell>
                <TableCell isHeader={true}>Order</TableCell>
                <TableCell isHeader={true}>Email</TableCell>
                <TableCell isHeader={true}>Location</TableCell>
                <TableCell isHeader={true}>Orders</TableCell>
                <TableCell isHeader={true}>Last order</TableCell>
                <TableCell isHeader={true}>Total spent</TableCell>
                <TableCell isHeader={true}>Refunds</TableCell>
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
                    <div className="relative flex items-center">
                      <button>
                        <svg
                          className={`w-4 h-4 shrink-0 fill-current ${
                            customer.fav ? "text-yellow-500" : "text-slate-300"
                          }`}
                          viewBox="0 0 16 16">
                          <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
                        </svg>
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-10 h-10 mr-2 shrink-0 sm:mr-3">
                        <Image
                          className="rounded-full"
                          src={customer.image}
                          width={40}
                          height={40}
                          alt={customer.name}
                        />
                      </div>
                      <div className="font-medium text-slate-800">
                        {customer.name}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left">{customer.email}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left">{customer.location}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{customer.orders}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-left text-sky-500">
                      {customer.lastOrder}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-left text-green-500">
                      {customer.spent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{customer.refunds}</div>
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

export default AdminUserLists;
