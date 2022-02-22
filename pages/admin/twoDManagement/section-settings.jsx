import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Instance } from "../../../Services";
import { useToasts } from "react-toast-notifications";
import TrashIcon from "../../../components/Icons/TrashIcon";

const SectionSettings = ({ children }) => {
  const { Sessions } = useSelector((state) => state.management);
  // const [messages, setMessages] = useState(true);
  // const [messagestwo, setMessagestwo] = useState(true);
  const { routes } = useSelector((state) => state.management);
  const [sessions, setsessions] = useState(Sessions.twoD);
  const { addToast } = useToasts();
  const [formData, setformData] = useState({
    name: "",
    fromDt: "",
    toDt: "",
  });

  const fetchSessions = useCallback(() => {
    Instance({
      url: "/settings/sessions/get2dSessions",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.Data && res.data.statusCode === 200) {
          setsessions(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const submitForm = (e) => {
    e.preventDefault();
    Instance({
      url: "/admin/settings/sessions/2d/create",
      data: formData,
      method: "POST",
    })
      .then((res) => {
        if (res.data && res.data.Data && res.data.statusCode === 200) {
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      })
      .catch((error) => {
        addToast("လုပ်ဆောင်မှု့မအောင်မြင်ပါ", {
          appearance: "warning",
          autoDismiss: true,
        });
      })
      .finally(() => {
        fetchSessions();
        setformData({
          name:'',
          fromDt:'',
          toDt:''
        })
      });
  };
  const onChangeStatus = (status, id) => {
   
    Instance({
      url: "/admin/settings/sessions/change_status",
      method: "POST",
      data: {
        id: id,
        status: status,
      },
    })
      .then((res) => {
        if (res.data && res.data.Data && res.data.statusCode === 200) {
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        addToast("လုပ်ဆောင်မှု့မအောင်မြင်ပါ", {
          appearance: "warning",
          autoDismiss: true,
        });
      })
      .finally(() => {
        fetchSessions();
      });
  };

  const onDeleteSession = (id)=>{
    Instance({
      url: "/admin/settings/sessions/2d/delete",
      method: "POST",
      data: {
        id: id,
      },
    })
      .then((res) => {
        if (res.data && res.data.Data && res.data.statusCode === 200) {
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        addToast("လုပ်ဆောင်မှု့မအောင်မြင်ပါ", {
          appearance: "warning",
          autoDismiss: true,
        });
      })
      .finally(() => {
        fetchSessions();
      });
  };
  
  return (
    <ManagementLayout routes={routes.twoDManagementRoutes} title="2D Manament">
      <ManagementHeader className={`text-indigo-500`}>
        အချိန်ပိုင်းသတ်မှန်ရန်
      </ManagementHeader>

      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-1 ">
          <div className="space-y-4 lg:space-y-6">
            <div className="">
              <label className="block mb-2 text-sm font-medium" htmlFor="name">
                အချိန်ပိုင်း အမည်<span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                className="w-full form-input"
                type="text"
                required
                name="name"
                value={formData["name"]}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
                placeholder="မနက်ပိုင်း ..."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="sectionName"
                >
                  စတင်မည့်အချိန်<span className="text-rose-500">*</span>
                </label>
                <input
                  type="time"
                  name="fromDt"
                  required
                  id="fromDt"
                  value={formData["fromDt"]}
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className="w-full form-select"
                />
              </div>
              <div className="">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="sectionName"
                >
                  ပြီးဆုံးမည့်အချိန်<span className="text-rose-500">*</span>
                </label>
                <input
                  type="time"
                  name="toDt"
                  id="toDt"
                  required
                  value={formData["toDt"]}
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
      </form>

      <div className="border-t border-slate-300">
        <div className="py-5"></div>
        {sessions &&
          sessions.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-slate-200"
            >
              {/* Left */}
              <div>
                <div className="font-semibold text-indigo-500">
                  {` ${s.name} ${s.fromDt} မှ ${s.toDt} ထိ`}
                </div>
               
              </div>
              {/* Right */}
              <div className="flex items-center space-x-3 ml-4">
                <div className="mr-2 text-sm italic text-slate-400">
                  {s.status ? "On" : "Off"}
                </div>
                <div className="form-switch"  onClick={() => onChangeStatus(!s.status, s.id)}>
                  <input
                    type="checkbox"
                    className="sr-only"
                    name={`status${i}`}
                    checked={s.status}
                    readOnly={true}
                   
                  />
                  <label className="bg-slate-400" htmlFor="messages">
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
                <div className="mr-2 text-sm italic text-slate-400">
                  {s.status ? "On" : "Off"}
                </div>
                <div className="form-switch" >
                  <button  onClick={() => onDeleteSession(s.id)}>
                      <TrashIcon className='text-red-400' />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ManagementLayout>
  );
};

export default SectionSettings;
