import Layout from ".";
import TwoDManagementSetting from "../TwoDManagement/ManagementSetting";

export const ManagementHeader = ({ children, className }) => {
  return (
    <h2
      className={`${className || ""}  text-2xl text-slate-800 font-bold mb-5`}>
      {children}
    </h2>
  );
};

const ManagementLayout = ({ children }) => {
  return (
    <Layout>
      <div className="h-full mb-8 bg-white rounded-md shadow-lg">
        <div className="flex flex-col md:flex-row md:-mr-px">
          <TwoDManagementSetting />
          <div className="p-6 space-y-10 grow">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default ManagementLayout;
