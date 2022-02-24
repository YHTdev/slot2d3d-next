import {  UploadIcon } from "@heroicons/react/outline";
import {  useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Instance } from "../../Services";
import { UiFileInput } from "../forms/UiFileInput";
import UiSelect from "../forms/UiSelect";

const CreateAgentUsers = ({
  fetchUsers,
  isModalOpen,
  setIsModalOpen,
  twoDcomissions = [],
  threeDComissions = [],
}) => {
  const [formData, setformData] = useState({
    phone: "",
    name: "",
    password: "",
    role: "AGENT",
    nrc: "",
    address: "",
    nrc_front: "",
    nrc_back: "",
    twoDComission: "",
    threeDComission: "",
    email: "",
    address: "",
  });

  const { addToast } = useToasts();

  const SubmitAgent = (e) => {
    e.preventDefault();
    try {
      Instance({
        url: "/admin/user/create_user",
        method: "POST",
        data: {
          phone: formData.phone,
          name: formData.name,
          password: formData.password,
          nrc: formData.nrc,
          twoDComission: formData.twoDComission,
          threeDComission: formData.threeDComission,
          nrc_front: formData.nrc_front,
          nrc_back: formData.nrc_back,
          email: formData.email,
          address: formData.address,
        },
      })
        .then((res) => {
          if (res.data && res.data.statusCode === 201) {
            addToast(res.data.message, {
              appearance: "success",
              autoDismiss: true,
            });
            fetchUsers()
            setIsModalOpen(!isModalOpen)
          } else if (res.data && res.data.statusCode === 400) {
            addToast(res.data.message, {
              appearance: "warning",
              autoDismiss: true,
            });
          }
        })
        .catch((err) => {
          addToast("တခုခုမှားယွင်းနေပါသည်", {
            appearance: "warning",
            autoDismiss: true,
          });
        });
    } catch (error) {
      addToast("တခုခုမှားယွင်းနေပါသည်", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };

  return (
    <form onSubmit={(e) => SubmitAgent(e)}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="space-y-4 ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="userName"
              >
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
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="phoneNumber"
              >
                ဖုန်းနံပါတ် <span className="text-rose-500">*</span>
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

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="commission"
              >
                2Dကော်မရှင်နှန်းထား <span className="text-rose-500">*</span>
              </label>
              <UiSelect
                options={twoDcomissions}
                className="text-sm"
                name="twoDcomission"
                id="twoDComission"
                optionValue="id"
                optionLabel="name"
                formData={formData}
                setFromData={setformData}
                placeHolder=" 2Dကော်မရှင်နှန်းထား "
              />
            </div>
            <div className="">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="commission"
              >
                3Dကော်မရှင်နှန်းထား <span className="text-rose-500">*</span>
              </label>
              <UiSelect
                options={threeDComissions}
                className="text-sm"
                name="threeDComission"
                id="threeDComission"
                optionValue="id"
                optionLabel="name"
                formData={formData}
                setFromData={setformData}
                placeHolder=" 3Dကော်မရှင်နှန်းထား "
              />
            </div>
            <div className="">
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                အီးမေးလ် <span className="text-slate-400">(Optional)</span>
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
                htmlFor="password"
              >
                စကားဝှက် <span className="text-rose-500">*</span>
              </label>
              <input
                id="password"
                className="w-full form-input"
                type="password"
                required
                name="password"
                value={formData.password}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="userName"
            >
              မှတ်ပုံတင်အမှတ် <span className="text-rose-500">*</span>
            </label>

            <input
              id="nrc"
              name="nrc"
              className="w-full form-input"
              type="text"
              required
              value={formData.nrc}
              onChange={(e) => {
                setformData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            <UiFileInput
              formData={formData}
              setFormData={setformData}
              title="မှတ်ပုံတင်ရှေ့"
              id="nrc_front"
              name="nrc_front"
            />
            <UiFileInput
              formData={formData}
              setFormData={setformData}
              title="မှတ်ပုံတင်နောက်"
              id="nrc_back"
              name="nrc_back"
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
      </div>
      <div className="flex items-center justify-end pt-5 space-x-5">
        <button
          type="submit"
          className="inline-flex items-center px-3 py-2 space-x-3 bg-blue-900 rounded-lg shadow-lg text-slate-200"
        >
          <UploadIcon className="w-4 h-4 " />
          <span>ဖန်တီးမည်</span>
        </button>
      </div>
    </form>
  );
};

export default CreateAgentUsers;
