import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Instance } from "../../../Services";
import { useToasts } from "react-toast-notifications";
import TrashIcon from "../../../components/Icons/TrashIcon";

const SectionSettings = ({ children }) => {

  const { routes } = useSelector((state) => state.management);
  const { addToast } = useToasts();
  const [formData, setFormData] = useState({
    name: "",
    fromDt: "",
    toDt: "",
  });
  const [sessions, setSessions] = useState([]);

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

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    try {
      Instance({
        url: "/admin/settings/sessions/3d/create",
        method: "POST",
        data: formData,
      })
        .then((res) => {
          if (res.data && res.data.statusCode === 200) {
            addToast(res.data.message, {
              appearance: "success",
              autoDismiss: true,
            });
          }
        })
        .catch((err) => {
          addToast("လုပ်ဆောင်မှု့မအောင်မြင်ပါ", {
            appearance: "warning",
            autoDismiss: true,
          });
        })
        .finally(() => {
          fetchSessions();
        });
    } catch (error) {
      addToast(JSON.stringify(error), {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  const onChangeStatus = (status, id) => {

    Instance({
      url: "/admin/settings/sessions/change_status",
      method: "POST",
      data: {
        id: id,
        status: !status,
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

  const onDeleteSession = (id) => {
    Instance({
      url: "/admin/settings/sessions/3d/delete",
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
    <ManagementLayout routes={routes.threeDManamentRoutes} title="3D Manament">
      <ManagementHeader className={`text-indigo-500`}>
        အချိန်ပိုင်းသတ်မှန်ရန်
      </ManagementHeader>

      <form
        onSubmit={(e) => {
          onSubmitForm(e);
        }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-1 ">
          <div className="space-y-4 lg:space-y-6">
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="sectionName"
              >
                အချိန်ပိုင်း အမည်<span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                value={formData["name"]}
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
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
                  htmlFor="sectionName"
                >
                  စတင်မည့်အချိန်<span className="text-rose-500">*</span>
                </label>
                <input
                  type="time"
                  name="fromDt"
                  id="fromDt"
                  value={formData["fromDt"]}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  required
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
                  value={formData["toDt"]}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  required
                  className="w-full form-select"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg"
              >
                အတည်ပြုမည်
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="border-t border-slate-300">
        <div className="py-5 ">

          {
            sessions.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-slate-200">
                {/* Left */}
                <div>
                  <div className="font-semibold text-indigo-500">
                    {s.name} {s.fromDt} မှ {s.toDt} ထိ
                  </div>
                  <div className="text-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit.
                  </div>
                </div>
                {/* Right */}
                <div className="flex items-center ml-4 space-x-3">
                  <div className="mr-2 text-sm italic text-slate-400">
                    {s.status ? "On" : "Off"}
                  </div>
                  <div className="form-switch" onClick={() => { onChangeStatus(s.status, s.id) }}>
                    <input
                      type="checkbox"
                      id="messages"
                      className="sr-only"
                      checked={s.status}

                    />
                    <label className="bg-slate-400" htmlFor="messages">
                      <span
                        className="bg-white shadow-sm"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Enable smart sync</span>
                    </label>
                  </div>
                  <div className="form-switch">
                    <button onClick={() => { onDeleteSession(s.id) }}>
                      <TrashIcon className='text-red-400' />
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
