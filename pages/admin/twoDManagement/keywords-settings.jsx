import { DotsHorizontalIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import UiInput from "../../../components/forms/UiInput";
import UiSelect from "../../../components/forms/UiSelect";
import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import SelectTable, {
  TableCell,
  TableRow,
} from "../../../components/SelectTable";
import { Instance } from "../../../Services";

const TwoDKeywords = ({ children }) => {
  const [formInput, setFormInput] = useState({
    keywordNumbs: [],
    keywordName: "",
  });

  const { addToast } = useToasts();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit handlar", formInput);
    try {
      Instance({
        url: "/admin/settings/keywords/2d/createKeyWords",
        method: "POST",
        data: {
          name: keywordName,
          nums: keywordNumbs,
        },
      }).then((res) => {
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
        } else {
          addToast("တစ်ခုခုမှားယွင်းနေပါသည်", {
            appearance: "warning",
            autoDismiss: true,
          });
        }
      });
    } catch (err) {
      addToast("System error", { appearance: "error", autoDismiss: true });
    }
  };
  const { routes } = useSelector((state) => state.management);
  const { Nums } = useSelector((state) => state.management);
  console.log();
  return (
    <ManagementLayout
      routes={routes.twoDManagementRoutes}
      title="2D management">
      <ManagementHeader className={`text-indigo-500`}>
        အသုံးအနှုန်းများ ထည့်ရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4 ">
          <div className="">
            <UiInput
              name="keywordName"
              id="keywordName"
              formData={formInput}
              setFromData={setFormInput}
              placeHolder="အသုံးအနှုန်းအမည်"
              required={true}
              type="text"
            />
          </div>

          <div className="">
            <UiSelect
              name="keywordNumbs"
              id="keywordNumbs"
              formData={formInput}
              setFromData={setFormInput}
              options={Nums.towD}
              optionLabel="num"
              optionValue="id"
              placeHolder="ကဏန်းရိုက်ပါ"
              isMultiple={true}
            />
          </div>

          <div className="flex items-center justify-end ">
            <button
              onClick={submitHandler}
              className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
              အတည်ပြုမည်
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="border rounded-md border-slate-900">
            <div className="flex items-center justify-between p-2">
              <div className="flex-auto text-xl">23</div>
              <button className="">
                <XIcon className="w-6 h-6 " />
              </button>
            </div>
          </div>
          <div className="border rounded-md border-slate-900">
            <div className="flex items-center justify-between p-2">
              <div className="flex-auto text-xl">32</div>
              <button className="">
                <XIcon className="w-6 h-6 " />
              </button>
            </div>
          </div>
          <div className="border rounded-md border-slate-900">
            <div className="flex items-center justify-between p-2">
              <div className="flex-auto text-xl">23</div>
              <button className="">
                <XIcon className="w-6 h-6 " />
              </button>
            </div>
          </div>
          <div className="border rounded-md border-slate-900">
            <div className="flex items-center justify-between p-2">
              <div className="flex-auto text-xl">23</div>
              <button className="">
                <XIcon className="w-6 h-6 " />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300">
        <div className="py-5 ">
          <SelectTable>
            <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
              <TableRow>
                <TableCell isHeader={true}>အသုံးအနှုန်းအမည်</TableCell>
                <TableCell isHeader={true}>ကဏန်း</TableCell>
                <TableCell isHeader={true} className="sr-only">
                  Menu
                </TableCell>
              </TableRow>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              <TableRow>
                <TableCell>နက္ခတ်</TableCell>
                <TableCell>
                  <div className="text-lg text-indigo-500">20</div>
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

export default TwoDKeywords;