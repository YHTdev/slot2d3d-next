import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import SelectTable, {
  TableCell,
  TableRow,
} from "../../../components/SelectTable";

const numbers = [
  { num: 0 },
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
  { num: 8 },
  { num: 9 },
];

const TwoDManagement = ({ children }) => {
  const [formInput, setFormInput] = useState({
    section: "",
    firstNumber: "",
    secondNumber: "",
    show: false,
  });

  const updateFormInput = (event) => {
    event.persist();
    setFormInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const { routes } = useSelector((state) => state.management);
  console.log();
  return (
    <ManagementLayout
      routes={routes.twoDManagementRoutes}
      title="2D management">
      <ManagementHeader className={`text-indigo-500`}>
        ပေါက်ကဏန်း ကြေညာရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4 ">
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <input
                type="date"
                name="date"
                id="date"
                className="w-full form-input"
              />
            </div>
            <div className="">
              <select
                onChange={updateFormInput}
                name="section"
                id="section"
                className="w-full space-y-3 form-select">
                <option>အချိန်ရွေးချယ်ပေးပါ</option>
                <option value="အချိန် ၁">အချိန် ၁</option>
                <option value="အချိန် ၂">အချိန် ၂</option>
                <option value="အချိန် ၃">အချိန် ၃</option>
                <option value="အချိန် ၄">အချိန် ၄</option>
              </select>
            </div>
          </div>

          <div className="">
            <input
              type="number"
              name="number"
              id="number"
              className="w-full form-input"
              placeholder="ကဏန်းရိုက်ပါ ..."
            />
          </div>

          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="space-y-2 ">
              <p className="text-xs text-red-500">
                အတည်ပြုမည် နှိပ်ပြီးပါက ထပ်မှန်ပြင်ဆင်ခွင့်မရှိတော့ပါ။
              </p>
              <p className="text-xs text-red-500">
                ထို့ကြောင့် အတည်ပြုမည် မနှိပ်မှိ ထပ်မှန်ပြန်စစ်ပါ
              </p>
            </div>
            <button
              onClick={submitHandler}
              className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
              အတည်ပြုမည်
            </button>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex h-16 overflow-hidden rounded-lg shadow-lg lg:h-20 space-x-7 bg-slate-200">
            <div className="flex items-center justify-center w-16 text-2xl font-bold bg-indigo-500 lg:w-20 text-slate-200">
              {formInput.firstNumber}
              {formInput.secondNumber}
            </div>
            <div className="inline-flex items-center ">
              <h1>
                <span className="mr-2 text-indigo-500">
                  {formInput.section}
                </span>
                ပေါက်ကဏန်း
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300">
        <div className="py-5 ">
          <SelectTable>
            <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
              <TableRow>
                <TableCell isHeader={true}>ရက်စွဲ</TableCell>
                <TableCell isHeader={true}>အချိန် ၁</TableCell>
                <TableCell isHeader={true}>အချိန် ၂</TableCell>
                <TableCell isHeader={true}>အချိန် ၃</TableCell>
                <TableCell isHeader={true}>အချိန် ၄</TableCell>
                <TableCell isHeader={true} className="sr-only">
                  Menu
                </TableCell>
              </TableRow>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              <TableRow>
                <TableCell>11/02/2020</TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">20</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">-</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">-</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">-</div>
                </TableCell>
                <TableCell>
                  <DotsHorizontalIcon className="w-6 h-6 " />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/02/2020</TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">98</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">60</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">36</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">05</div>
                </TableCell>
                <TableCell>
                  <DotsHorizontalIcon className="w-6 h-6 " />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>09/02/2020</TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">38</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">23</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">64</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">03</div>
                </TableCell>
                <TableCell>
                  <DotsHorizontalIcon className="w-6 h-6 " />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>08/02/2020</TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">60</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">61</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">47</div>
                </TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">29</div>
                </TableCell>
                <TableCell>
                  <DotsHorizontalIcon className="w-6 h-6 " />
                </TableCell>
              </TableRow>
            </tbody>
          </SelectTable>
        </div>
      </div>
    </ManagementLayout>
  );
};

export default TwoDManagement;
