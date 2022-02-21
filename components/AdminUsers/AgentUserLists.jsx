import Card, { CardBody, CardHeader } from "../Card";
import SelectTable, { TableCell, TableRow } from "../SelectTable";

import { RefreshIcon } from "@heroicons/react/outline";
import SearchForm from "../SearchForm";
import { useToasts } from "react-toast-notifications";
import { Instance } from "../../Services";

const AdminUserLists = ({ customers = [], fetchUsers }) => {
  const { addToast } = useToasts();
  const onChangeStatus = (status, id) => {
    Instance({
      url: "/admin/user/user_status_change",
      method: "POST",
      data: {
        id: id,
        status: status,
      },
    })
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
        } else if (res.data && res.data.statusCode === 400) {
          addToast(res.data.message, {
            appearance: "warning",
            autoDismiss: true,
          });
        }
      })
      .catch((err) => {})
      .finally(() => {
        fetchUsers();
      });
  };
  return (
    <>
      <Card className={`col-span-full`}>
        <CardHeader className={`flex items-center justify-between`}>
          <h2 className="font-semibold text-slate-800">
            အသုံးပြုသူ စားရင်းများ
          </h2>
          <div className="flex items-center space-x-4">
            <SearchForm />
            <button className="hidden p-1 rounded-full text-slate-200 bg-slate-500 lg:block">
              <RefreshIcon className="w-5 h-5" />
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
                  အခြေအနေ
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
                    <div className="text-left">{customer.phone}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left">{customer.profile.nrc}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left max-w-md truncate ...">
                      {customer.profile.address}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-left ">
                      {`${customer.profile.email}`
                        ? `${customer.profile.email}`
                        : `-`}
                    </div>
                  </TableCell>

                  <TableCell>
                    {/* Menu button */}
                    <div
                      className="form-switch"
                      onClick={() => {
                        onChangeStatus(!customer.status, customer.id);
                      }}
                    >
                      <input
                        type="checkbox"
                         readOnly
                        className="sr-only"
                        checked={customer.status}
                      />
                      <label className="bg-slate-400" htmlFor="messages">
                        <span
                          className="bg-white shadow-sm"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Enable smart sync</span>
                      </label>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </SelectTable>
        </CardBody>
      </Card>
    </>
  );
};

export default AdminUserLists;
