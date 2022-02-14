import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import { useState } from "react";
import { useSelector } from "react-redux";

const CommissionSettings = ({ children }) => {
  const [messages, setMessages] = useState(false);
  const { routes } = useSelector((state) => state.management);
  return (
    <ManagementLayout routes={routes.twoDManagementRoutes} title="2D Manament">
      <ManagementHeader className={`text-indigo-500`}>
        ကော်မရှင် သတ်မှတ်ရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-1 ">
        <div className="space-y-4 lg:space-y-6">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="commission">
              % ကော်မရှင် နှုန်းထား<span className="text-rose-500">*</span>
            </label>
            <input
              id="commission"
              className="w-full form-input"
              type="number"
              required
              placeholder="ကော်မရှင် နှုန်းထား"
            />
          </div>
          <div className="flex items-center justify-end">
            <button className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
              အတည်ပြုမည်
            </button>
          </div>

          <div className="flex items-center justify-between py-3 leading-loose border-b border-slate-200">
            {/* Left */}
            <div>
              <div className="font-semibold text-indigo-500">
                တစ်ဦးချင်းအလိုက် သီးခြားကော်မရှင်လက်ခံခြင်း
              </div>
              <div className="text-sm">
                သီးခြားကော်မရှင်လက်ခံပါက Agent တွင်
                တစ်ဦးချင်းအားသတ်မှတ်ပေးရပါမည်။
              </div>
            </div>
            {/* Right */}
            <div className="flex items-center ml-4">
              <div className="mr-2 text-sm italic text-slate-400">
                {messages ? "On" : "Off"}
              </div>
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="messages"
                  className="sr-only"
                  checked={messages}
                  onChange={() => setMessages(!messages)}
                />
                <label className="bg-slate-400" htmlFor="messages">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"></span>
                  <span className="sr-only">Enable smart sync</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
};

export default CommissionSettings;
