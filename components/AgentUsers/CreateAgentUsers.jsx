import { IdentificationIcon, UploadIcon } from "@heroicons/react/outline";
import { useCallback, useState } from "react";
import { Instance } from "../../Services";

const CreateAgentUsers = ({ fetchUsers, isModalOpen, setIsModalOpen,twoDcomissions=[],threeDComissions=[] }) => {
  const [formData, setformData] = useState({
    phone: "",
    name: "",
    password: "",
    role: "AGENT",
    nrc: "",
    address: "",
    nrc_front: "",
    nrc_back: "",
  });

 
  return (
    <>
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
              <input
                id="commission"
                className="w-full form-input"
                type="number"
                placeholder="%"
                required
              />
            </div>
            <div className="">
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                အီးမေးလ် <span className="text-slate-400">(Optional)</span>
              </label>
              <input id="email" className="w-full form-input" type="email" />
            </div>
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
            />
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
            />
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            <button className="flex flex-col items-center justify-center p-2 space-y-2 border rounded-md border-slate-200">
              <IdentificationIcon className="w-5 h-5 " />
              <p className="text-xs ">ရှေ့ မှတ်ပုံတင်</p>
            </button>
            <button className="flex flex-col items-center justify-center p-2 space-y-2 border rounded-md border-slate-200">
              <IdentificationIcon className="w-5 h-5 " />
              <p className="text-xs ">နောက် မှတ်ပုံတင် </p>
            </button>
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="AgentAddress"
            >
              လိပ်စာ <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="AgentAddress"
              id="AgentAddress"
              rows="5"
              className="w-full form-input"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end pt-5 space-x-5">
        <button className="inline-flex items-center px-3 py-2 space-x-3 bg-blue-900 rounded-lg shadow-lg text-slate-200">
          <UploadIcon className="w-4 h-4 " />
          <span>ဖန်တီးမည်</span>
        </button>
      </div>
    </>
  );
};

export default CreateAgentUsers;
