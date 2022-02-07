import Layout from "../../../components/layout";
import Breadcrumb from "../../../components/Breadcrumb";
import SearchForm from "../../../components/SearchForm";
import CreateAgentUsers from "../../../components/AgentUsers/CreateAgentUsers";
import AdminSettings from "../../../components/AgentUsers/AdminSettings";
import AgentUserLists from "../../../components/AgentUsers/AgentUserLists";
import { PlusIcon } from "@heroicons/react/outline";

const Agents = () => {
  return (
    <Layout>
      <Breadcrumb />
      <div className="mb-8 sm:flex sm:justify-between sm:items-center">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
            Agents
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end">
          {/* Datepicker built with flatpickr */}
          {/* <Datepicker align="right" /> */}
          {/* <SearchForm /> */}
          <button className="inline-flex items-center px-3 py-2 space-x-2 bg-blue-900 rounded-md shadow-lg text-slate-200">
            <PlusIcon className="w-4 h-4" />
            <span>Create Agent</span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6 space-y-12">
        {/* <CreateAgentUsers /> */}
        <AgentUserLists />
      </div>
    </Layout>
  );
};

export default Agents;
