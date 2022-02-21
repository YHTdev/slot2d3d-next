import { UploadIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Instance } from "../../Services/";
const CreateAdminUsers = ({ fetchUsers,isModalOpen,setIsModalOpen }) => {
  const [formData, setformData] = useState({
    phone: "",
    name: "",
    password: "",
    role: "ADMIN",
    nrc: "",
    address: "",
    nrc_front: "",
    nrc_back: "",
  });
  const { addToast } = useToasts();
  const onSubmitForm = (e) => {
    e.preventDefault();
    try {
      Instance({
        url: "/admin/user/create_user",
        method: "POST",
        data: formData,
      })
        .then((res) => {
          if (res.data && res.data.statusCode === 201) {
            setIsModalOpen(!isModalOpen)
            addToast(res.data.message, {
              appearance: "success",
              autoDismiss: true,
            });
          }
          else if(res.data && res.data.statusCode===400){
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
        .finally(() => {
          
          fetchUsers();
        });
    } catch (error) {
      addToast(JSON.stringify(error), {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <form
      onSubmit={(e) => {
        onSubmitForm(e);
      }}
    >
      <div className="space-y-4 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="userName">
            အမည်<span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setformData({ ...formData, [e.target.name]: e.target.value });
            }}
            className="w-full form-input"
            type="text"
            required
          />
          </div>
          <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="userName">
            မှတ်ပုံတင်နံပါတ်<span className="text-rose-500">*</span>
          </label>
          <input
            id="nrc"
            name="nrc"
            value={formData.nrc}
            onChange={(e) => {
              setformData({ ...formData, [e.target.name]: e.target.value });
            }}
            className="w-full form-input"
            type="text"
            required
          />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              အီးမေးလ် <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setformData({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full form-input"
              type="email"
            />
          </div>

          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="phoneNumber"
            >
              ဖုန်းနံပါတ် <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                setformData({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full form-input"
              type="tel"
              placeholder="09"
              required
            />
          </div>
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="password">
            စကားဝှက် <span className="text-rose-500">*</span>
          </label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => {
              setformData({ ...formData, [e.target.name]: e.target.value });
            }}
            className="w-full form-input"
            type="password"
            required
          />
        </div>

        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="AgentAddress"
          >
            လိပ်စာ <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={(e) => {
              setformData({ ...formData, [e.target.name]: e.target.value });
            }}
            rows="5"
            className="w-full form-input"
          />
        </div>
      </div>

      <div className="flex items-center justify-end pt-5 space-x-5">
        <button className="inline-flex items-center px-3 py-2 space-x-3 bg-blue-900 rounded-lg shadow-lg text-slate-200">
          <UploadIcon className="w-4 h-4 " />
          <span>ဖန်တီးမည်</span>
        </button>
      </div>
    </form>
  );
};

export default CreateAdminUsers;
{
}
