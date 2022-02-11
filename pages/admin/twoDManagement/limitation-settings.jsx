import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

const SectionSettings = ({ children }) => {
  const [messages, setMessages] = useState(true);
  const [messagestwo, setMessagestwo] = useState(true);
  const { routes } = useSelector((state) => state.management);
  return (
    <ManagementLayout
      routes={routes.twoDManagementRoutes}
      title="2D management"
    >
      <ManagementHeader className={`text-indigo-500`}>
        အကန့်အသတ် သတ်မှတ်ရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4 ">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="amountLimit"
            >
              ငွေပမာဏ ရိုင်ထည့်ပါ<span className="text-rose-500">*</span>
            </label>
            <input
              id="amountLimit"
              className="w-full form-input"
              type="number"
              required
              placeholder="10000 ..."
            />
          </div>
          <div className="">
            <select name="section" id="section" className="w-full form-select">
              <option>အချိန်ရွေးချယ်ပေးပါ</option>
              <option value="မနက်ပိုင်း">မနက်ပိုင်း</option>
              <option value="ညနေပိုင်း">ညနေပိုင်း</option>
            </select>
          </div>

          <div className="flex items-center justify-end">
            <button className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
              စာရင်းသွင်းမည်
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300">
        <div className="grid grid-cols-1 gap-6 py-5 lg:grid-cols-2">
          {/* Data Card */}
          <div className="overflow-hidden border-l-4 border-indigo-500 rounded-lg shadow-lg bg-slate-200">
            <div className="p-5 space-y-5">
              <p className="inline-flex items-center font-medium lg:text-4xl">
                <span>100,000</span>
                <span className="ml-4 lg:text-xl">ကျပ်</span>
              </p>
              <p className="font-medium lg:text-2xl">
                မနက်ပိုင်း (၈:၀၀ မှ ၁၀:၀၀ ထိ)
              </p>
              <div className="flex items-center justify-end space-x-5">
                <button className="text-indigo-500 ">
                  <PencilAltIcon className="w-6 h-6" />
                </button>
                <button className="text-red-500 ">
                  <TrashIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden border-l-4 border-indigo-500 rounded-lg shadow-lg bg-slate-200">
            <div className="p-5 space-y-5">
              <p className="inline-flex items-center font-medium lg:text-4xl">
                <span>250,000</span>
                <span className="ml-4 lg:text-xl">ကျပ်</span>
              </p>
              <p className="font-medium lg:text-2xl">
                နေ့လည်ပိုင်း (၁၀:၀၀ မှ ၁၂:၀၀ ထိ)
              </p>
              <div className="flex items-center justify-end space-x-5">
                <button className="text-indigo-500 ">
                  <PencilAltIcon className="w-6 h-6" />
                </button>
                <button className="text-red-500 ">
                  <TrashIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
};

export default SectionSettings;
