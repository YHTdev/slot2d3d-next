import { CalculatorIcon, ClockIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const TwoDManagementSetting = ({routes=[],title}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col px-3 py-6 border-b md:overflow-auto md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3">
      {/* <div className="flex px-3 py-6 overflow-x-scroll border-b flex-nowrap no-scrollbar md:block md:overflow-auto md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3"> */}
      {/* Group 1 */}
      <div className="flex space-x-4 md:space-x-0 md:justify-between">
        <div className="mb-3 text-xs font-semibold uppercase text-slate-400">
         {title}
        </div>
        {/* <div className="mb-3 text-xs font-semibold uppercase text-slate-400">
          3D Settings
        </div> */}
      </div>
      <ul className="flex mr-3 overflow-x-auto no-scrollbar md:block md:mr-0">
         {
           routes.map((r,i)=>(
            <li className=" mr-0.5 md:mr-0 md:mb-0.5" key={i}>
          <Link href={r.src}>
            <a
              className={`block transition duration-150 rounded ${
                router.pathname === r.src && "bg-indigo-50"
              }`}>
              <div
                className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap ${
                  router.pathname === "/admin/2d" && " text-indigo-400"
                }`}>
                <CalculatorIcon className="w-4 h-4 " />
                <span className="ml-3 text-sm font-medium">
                 {r.title}
                </span>
              </div>
            </a>
          </Link>
        </li>
           ))
         }
        
        
      </ul>
    </div>
  );
};

export default TwoDManagementSetting;
