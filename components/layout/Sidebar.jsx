import styles from "../../styles/Sidebar.module.scss";

import Link from "next/link";
import { FolderAddIcon, UsersIcon } from "@heroicons/react/outline";
import SidebarLinkGroup, { MenuButton, MenuItem } from "../SidebarLinkGroup";
import SidebarLink from "../SidebarLink";
import Logo from "../Icons/Logo";

const Sidebar = () => {
  return (
    <div className="">
      {/* Sidebar backdrop (mobile only) */}
      {/* Sidebar backdrop (mobile only) */}

      {/* Sidebar */}
      <div
        className={`${styles.sidebarWrapper} no-scrollbar lg:sidebar-expanded:!w-64 2xl:!w-64`}>
        <div className="flex justify-between pr-3 mb-10 sm:px-2">
          {/* Logo */}
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        {/* Links */}
        <div className="space-y-8 ">
          {/* Pages group */}
          <div>
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

              {/* E-Commerce */}

              <SidebarLinkGroup>
                <MenuButton
                  rootTitle="Admin Users"
                  rootIcon={<UsersIcon className={styles.menuIcon} />}
                />
                <MenuItem linkHref={`"/team/team-tabs"`} menuTitle={`Users`} />
              </SidebarLinkGroup>
            </div>
          </div>
          {/* Admin Users group */}
          <div>
            <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
              <span
                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span>
            </h3>
            <div className="mt-3">
              {/* Dashboard */}
              <SidebarLink
                pathName="/admin-users"
                linkIcon={<UsersIcon className={styles.menuIcon} />}
                linkTitle={`Admin Users`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
