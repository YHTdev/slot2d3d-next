import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { Instance } from "../../../Services/";
import { useToasts } from "react-toast-notifications";
const SectionSettings = ({ children }) => {
  const { routes } = useSelector((state) => state.management);
  const [sessions, setSessions] = useState([]);
  const [limits, setLimits] = useState([]);
  const { addToast } = useToasts();
  const [formData, setformData] = useState({
    sessionId: "",
    amount: 0,
    type: "ThreeD",
  });
  const fetchSessions = useCallback(() => {
    Instance({
      url: "/settings/sessions/get3dSessions",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          setSessions(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchLimits = useCallback(() => {
    Instance({
      url: "/settings/limits/get_3D_limits",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          setLimits(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchLimits();
    fetchSessions();
  }, [fetchLimits, fetchSessions]);

  const SubmitForm = (e) => {
    e.preventDefault();
    try {
      Instance({
        url: "/admin/settings/limit/create",
        method: "POST",
        data: formData,
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
          else {
            addToast('တခုခုမှားယွင်းနေပါသည်',{appearance:'warning',autoDismiss:true})
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          fetchLimits()
          setformData({
            sessionId: "",
            amount: 0,
            type: "ThreeD",
          });
        });
    } catch (error) {
      addToast("တခုခုမှားယွင်းနေပါသည်", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const DeleteLimit = (id)=>{
    try {
        Instance({
          url:'/admin/settings/limit/delete',
          method:'POST',
          data:{
            id:id
          }
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
          else {
            addToast('တခုခုမှားယွင်းနေပါသည်',{appearance:'warning',autoDismiss:true})
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          fetchLimits()
          setformData({
            sessionId: "",
            amount: 0,
            type: "ThreeD",
          });
        });

    } catch (error) {
      addToast("တခုခုမှားယွင်းနေပါသည်", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }

  return (
    <ManagementLayout
    routes={routes.threeDManamentRoutes} title="3D Manament"
    >
      <ManagementHeader className={`text-indigo-500`}>
        အကန့်အသတ် သတ်မှတ်ရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <form onSubmit={(e) => SubmitForm(e)} className="space-y-4">
          <div className="space-y-4 ">
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="amountLimit"
              >
                ငွေပမာဏ ရိုင်ထည့်ပါ<span className="text-rose-500">*</span>
              </label>
              <input
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
                className="w-full form-input"
                type="number"
                required
                placeholder="10000 ..."
              />
            </div>
            <div className="">
              <select
                required
                value={formData.sessionId}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
                name="sessionId"
                id="sessionId"
                className="w-full form-select"
              >
                <option>အချိန်ရွေးချယ်ပေးပါ</option>
                {sessions.map((s, i) => (
                  <option key={i} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-end">
              <button className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
                စာရင်းသွင်းမည်
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="border-t border-slate-300">
        <div className="grid grid-cols-1 gap-6 py-5 lg:grid-cols-2">
          {/* Data Card */}
         {
           limits.map((l,i)=>(
            <div key={i} className="overflow-hidden border-l-4 border-indigo-500 rounded-lg shadow-lg bg-slate-200">
            <div className="p-5 space-y-5">
              <p className="inline-flex items-center font-medium lg:text-4xl">
                <span>{l.amount}</span>
                <span className="ml-4 lg:text-xl">ကျပ်</span>
              </p>
              <p className="font-medium lg:text-2xl">
                {l.session.name} ({l.session.fromDt} မှ {l.session.toDt} ထိ)
              </p>
              <div className="flex items-center justify-end space-x-5">
                
                <button onClick={()=>{DeleteLimit(l.id)}} className="text-red-500 ">
                  <TrashIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
           ))
         }
        
        </div>
      </div>
    </ManagementLayout>
  );
};

export default SectionSettings;
