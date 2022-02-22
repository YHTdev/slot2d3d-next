import ManagementLayout, {
  ManagementHeader,
} from "../../../components/layout/ManagementLayout";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Instance } from "../../../Services/";
import { useToasts } from "react-toast-notifications";
import TrashIcon from "../../../components/Icons/TrashIcon";
const CommissionSettings = ({ children }) => {
 
  const { routes } = useSelector((state) => state.management);
  const [comissions, setcomissions] = useState([]);
  const { addToast } = useToasts();
  const [formData, setformData] = useState({
    name: "",
    rate: 1,
    type: "TwoD",
  });
  const fetchComissions = useCallback(() => {
    Instance({
      url: "/settings/comissions/get_2D_commissions",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          setcomissions(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetchComissions();
  }, [fetchComissions]);

  const submitForm = (e) => {
    e.preventDefault();
    try {
      Instance({
        url: "/admin/settings/comissions/create",
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
        })
        .catch((err) => {
          addToast("လုပ်ဆောင်ချက်မအောင်မြင်ပါ", {
            appearance: "warning",
            autoDismiss: true,
          });
        })
        .finally(()=>{
          fetchComissions()
          setformData({
            type:'TwoD',
            name:'',
            rate:2
          })
        })
    } catch (error) {
      addToast("လုပ်ဆောင်ချက်မအောင်မြင်ပါ", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  const onChangeStatus = (status, id) => {

    Instance({
      url: "/admin/settings/comissions/changeStatus",
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
        fetchComissions();
      });
  };

  const onDeleteSession = (id) => {
    Instance({
      url: "/admin/settings/comissions/delete",
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
        fetchComissions();
      });
  };


  return (
    <ManagementLayout routes={routes.twoDManagementRoutes} title="2D Manament">
      <ManagementHeader className={`text-indigo-500`}>
        ကော်မရှင် သတ်မှတ်ရန်
      </ManagementHeader>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-1 ">
        <div className="">
          <form
            onSubmit={(e) => {
              submitForm(e);
            }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="commission"
              >
                ကော်မရှင် <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                className="w-full form-input"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
                placeholder="ကော်မရှင်"
              />
            </div>
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="commission"
              >
                % ကော်မရှင် နှုန်းထား<span className="text-rose-500">*</span>
              </label>
              <input
                id="rate"
                name="rate"
                value={formData.rate}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
                className="w-full form-input"
                type="number"
                required
                min={1}
                max={99}
                placeholder="ကော်မရှင် နှုန်းထား"
              />
            </div>
            <div className="flex items-center justify-end">
              <button className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
                အတည်ပြုမည်
              </button>
            </div>
          </form>

          {
            comissions.map((c,i)=>(
              <div key={i} className="flex items-center justify-between py-3 leading-loose border-b border-slate-200">
            {/* Left */}
            <div>
              <div className="font-semibold text-indigo-500">
                {c.name}
              </div>
              <div className="text-sm">
                {c.rate}% 
              </div>
            </div>
            {/* Right */}
            <div className="form-switch" onClick={() => { onChangeStatus(c.status, c.id) }}>
                    <input
                      type="checkbox"
                     
                      className="sr-only"
                      checked={c.status}

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
                    <button onClick={() => { onDeleteSession(c.id) }}>
                      <TrashIcon className='text-red-400' />
                    </button>
                  </div>
          </div>
            ))
          }
        </div>
      </div>
    </ManagementLayout>
  );
};

export default CommissionSettings;
