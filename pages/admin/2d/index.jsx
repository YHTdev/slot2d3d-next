import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";

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
  return (
    <ManagementLayout>
      <ManagementHeader className={`text-indigo-500`}>
        ပေါက်ကဏန်း ကြေညာရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4 ">
          <div className="">
            <select name="section" id="section" className="w-full form-select">
              <option>အချိန်ရွေးချယ်ပေးပါ</option>
              <option value="မနက်ပိုင်း">မနက်ပိုင်း</option>
              <option value="ညနေပိုင်း">ညနေပိုင်း</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <select
                name="section"
                id="section"
                className="w-full form-select">
                <option>ရွေးပါ</option>
                {numbers.map((number, i) => (
                  <option key={i} value={number.num}>
                    {number.num}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <select
                name="section"
                id="section"
                className="w-full form-select">
                <option>ရွေးပါ</option>
                {numbers.map((number, i) => (
                  <option key={i} value={number.num}>
                    {number.num}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-2 ">
              <p className="text-xs text-red-500">
                အတည်ပြုမည် နှိပ်ပြီးပါက ထပ်မှန်ပြင်ဆင်ခွင့်မရှိတော့ပါ။
              </p>
              <p className="text-xs text-red-500">
                ထို့ကြောင့် အတည်ပြုမည် မနှိပ်မှိ ထပ်မှန်ပြန်စစ်ပါ
              </p>
            </div>
            <button className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
              အတည်ပြုမည်
            </button>
          </div>
        </div>

        <div className="space-y-10 ">
          <div className="flex h-16 overflow-hidden rounded-lg shadow-lg lg:h-20 space-x-7 bg-slate-200">
            <div className="flex items-center justify-center w-16 text-2xl font-bold bg-indigo-500 lg:w-20 text-slate-200">
              12
            </div>
            <div className="inline-flex items-center ">
              <h1>
                <span className="mr-2 text-indigo-500">
                  ညနေပိုင်း (၁၀း၀၀ မှ ၁၂း၀၀ ထိ)
                </span>
                ပေါက်ကဏန်း
              </h1>
            </div>
          </div>
          <div className="flex h-16 overflow-hidden rounded-lg shadow-lg lg:h-20 space-x-7 bg-slate-200">
            <div className="flex items-center justify-center w-16 text-2xl font-bold bg-indigo-500 lg:w-20 text-slate-200">
              37
            </div>
            <div className="inline-flex items-center ">
              <h1>
                <span className="mr-2 text-indigo-500">
                  မနက်ပိုင်း (၈း၀၀ မှ ၁၀း၀၀ ထိ)
                </span>
                ပေါက်ကဏန်း
              </h1>
            </div>
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
};

export default TwoDManagement;
