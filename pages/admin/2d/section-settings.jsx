import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import { useState } from "react";

const SectionSettings = ({ children }) => {
  const [messages, setMessages] = useState(true);
  const [messagestwo, setMessagestwo] = useState(true);
  return (
    <ManagementLayout>
      <ManagementHeader className={`text-indigo-500`}>
        အချိန်ပိုင်းသတ်မှန်ရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-1 ">
        <div className="space-y-4 lg:space-y-6">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="sectionName">
              အချိန်ပိုင်း အမည်<span className="text-rose-500">*</span>
            </label>
            <input
              id="sectionName"
              className="w-full form-input"
              type="text"
              required
              placeholder="မနက်ပိုင်း ..."
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="sectionName">
                စတင်မည့်အချိန်<span className="text-rose-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="toDate"
                id="toDate"
                className="w-full form-select"
              />
            </div>
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="sectionName">
                ပြီးဆုံးမည့်အချိန်<span className="text-rose-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="toDate"
                id="toDate"
                className="w-full form-select"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
              အတည်ပြုမည်
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300">
        <div className="py-5 ">
          <div className="flex items-center justify-between py-3 border-b border-slate-200">
            {/* Left */}
            <div>
              <div className="font-semibold text-indigo-500">
                မနက်ပိုင်း ၈း၀၀ မှ ၁၀း၀၀ ထိ
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit.
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
          <div className="flex items-center justify-between py-3 border-b border-slate-200">
            {/* Left */}
            <div>
              <div className="font-semibold text-indigo-500">
                မနက်ပိုင်း ၁၀း၀၀ မှ ၁၂း၀၀ ထိ
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit.
              </div>
            </div>
            {/* Right */}
            <div className="flex items-center ml-4">
              <div className="mr-2 text-sm italic text-slate-400">
                {messagestwo ? "On" : "Off"}
              </div>
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="messagestwo"
                  className="sr-only"
                  checked={messagestwo}
                  onChange={() => setMessagestwo(!messagestwo)}
                />
                <label className="bg-slate-400" htmlFor="messagestwo">
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

export default SectionSettings;
