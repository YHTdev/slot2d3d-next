import Card, { CardBody, CardHeader } from "../Card";

const CreateAdminUser = () => {
  return (
    <Card className={`col-span-full xl:col-span-8`}>
      <CardHeader>
        <h2 className="font-semibold text-slate-800">Create Admin User</h2>
      </CardHeader>
      <CardBody>
        <div className="spacey-4">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="userName">
              User Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="userName"
              className="w-full form-input"
              type="text"
              required
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              className="w-full form-input"
              type="email"
              required
            />
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="password">
              Password <span className="text-rose-500">*</span>
            </label>
            <input
              id="password"
              className="w-full form-input"
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-end pt-5 space-x-5">
            <button className="px-3 py-2 border rounded-lg shadow-lg">
              Cancle
            </button>
            <button className="px-3 py-2 bg-blue-900 rounded-lg shadow-lg text-slate-200">
              Save Changes
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CreateAdminUser;
