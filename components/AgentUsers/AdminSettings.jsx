import Card, { CardBody, CardHeader } from "../Card";

const AdminSettings = () => {
  return (
    <Card className={` col-span-full xl:col-span-6 relative`}>
      <CardHeader>
        <h2 className="font-semibold text-slate-800">Admin Settings</h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4 ">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="userName">
              Select Agent Name <span className="text-rose-500">*</span>
            </label>
            <div className="">
              <select name="regionNumber" id="regionId" className="w-full ">
                <option value="Aung Aung">Aung Aung</option>
                <option value="Nyi Nyi">Nyi Nyi</option>
              </select>
            </div>
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="userName">
              NRC <span className="text-rose-500">*</span>
            </label>

            <div className="flex space-x-4">
              <div className="">
                <select name="regionNumber" id="regionId" className="">
                  <option value="၁">၁</option>
                  <option value="၂">၂</option>
                  <option value="၃">၃</option>
                  <option value="၄">၄</option>
                  <option value="၅">၅</option>
                  <option value="၆">၆</option>
                  <option value="၇">၇</option>
                </select>
              </div>
              <p className="text-3xl font-light">/</p>
              <div className="">
                <select name="regionNumber" id="regionId" className="">
                  <option value="ကက န">ကက န</option>
                  <option value="ခခ န">ခခ န</option>
                  <option value="ဓဓ">ဓဓ</option>
                  <option value="ညည န">ညည န</option>
                </select>
              </div>
              <div className="">
                <select name="regionNumber" id="regionId" className="">
                  <option value="(နိုင်)">(နိုင်)</option>
                  <option value="(ဧည့်)">(ဧည့်)</option>
                </select>
              </div>

              <div className="flex-auto ">
                <input
                  id="userName"
                  className="w-full form-input"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="AgentAddress">
              Address <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="AgentAddress"
              id="AgentAddress"
              rows="2"
              className="w-full form-input"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AdminSettings;
