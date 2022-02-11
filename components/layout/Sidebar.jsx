import Link from "next/link";
import styles from "../../styles/Sidebar.module.scss";

import Logo from "../Icons/Logo";
import SidebarLink from "../SidebarLink";

import { FolderAddIcon, UsersIcon,CubeIcon } from "@heroicons/react/outline";
import { LogoutIcon } from "@heroicons/react/solid";
const Sidebar = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div className="">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sideBarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`flex flex-col absolute z-40 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto w-64 shrink-0  bg-slate-800 transition-all duration-200 ease-in-out ${
          sideBarOpen
            ? " w-64 lg:w-20 translate-x-0 transition duration-700"
            : "-translate-x-64 transition duration-700"
        }`}
        aria-hidden="true">
        {/* Sidebar Header */}
        <div className="flex items-center h-16 px-2">
          {/* Logo */}
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        {/* Links */}
        <div className="space-y-8 ">
          {/* Pages Groups */}
          <div className="">
            <div className="mt-3">
              {/* Dashboard */}
              <SidebarLink
                pathName="/"
                linkIcon={<FolderAddIcon className={styles.menuIcon} />}
                linkTitle={`Dashboardss`}
              />

              <SidebarLink
                pathName="/admin/agents"
                linkIcon={<UsersIcon className={styles.menuIcon} />}
                linkTitle={`Agents`}
              />
              <SidebarLink
                pathName="/admin/admin-users"
                linkIcon={<UsersIcon className={styles.menuIcon} />}
                linkTitle={`Admin Users`}
              />
              <SidebarLink
                pathName="/admin/slots/2d"
                linkIcon={<CubeIcon className={styles.menuIcon} />}
                linkTitle={`2D`}
              />
               <SidebarLink
                pathName="/admin/slots/3d"
                linkIcon={<CubeIcon className={styles.menuIcon} />}
                linkTitle={`3D`}
              />
            </div>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="inline-flex justify-end pt-3 mt-auto border-t border-slate-600">
          <div className="px-3 py-2">
            <button onClick={() => setSideBarOpen(!sideBarOpen)}>
              <span className="sr-only">Expand / collapse sidebar</span>

              <LogoutIcon
                className={`w-6 h-6 text-slate-200 ${
                  !sideBarOpen
                    ? "rotate-180 transition duration-700 "
                    : "transition duration-700"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
