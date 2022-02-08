import { UploadIcon } from "@heroicons/react/outline";

const CreateAdminUsers = ({}) => {
  return (
    <>
      <div className="space-y-4 ">
        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="userName">
            အမည်<span className="text-rose-500">*</span>
          </label>
          <input
            id="userName"
            className="w-full form-input"
            type="text"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              အီးမေးလ် <span className="text-rose-500">*</span>
            </label>
            <input id="email" className="w-full form-input" type="email" />
          </div>

          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="phoneNumber"
            >
              ဖုန်းနံပါတ် <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              id="phoneNumber"
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
            className="w-full form-input"
            type="password"
            required
          />
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="role">
            Role <span className="text-rose-500">*</span>
          </label>

          <select name="role" id="role" className="w-full form-select">
            <option value="super_admin">Super Admin</option>
            <option value="primary_admin">Primary Admin</option>
            <option value="Secondary_admin">Secondary Admin</option>
          </select>
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

      <div className="flex items-center justify-end pt-5 space-x-5">
        <button className="inline-flex items-center px-3 py-2 space-x-3 bg-blue-900 rounded-lg shadow-lg text-slate-200">
          <UploadIcon className="w-4 h-4 " />
          <span>ဖန်တီးမည်</span>
        </button>
      </div>
    </>
  );
};

export default CreateAdminUsers;
{
}
