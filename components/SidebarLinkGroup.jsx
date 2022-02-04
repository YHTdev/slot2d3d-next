import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

export const MenuButton = ({ rootIcon, rootTitle }) => {
  return (
    <Menu.Button className="w-full ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {rootIcon}
          <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
            {rootTitle}
          </span>
        </div>
        <div className="">
          <ChevronDownIcon className="w-4 h-4 shrink-0" />
        </div>
      </div>
    </Menu.Button>
  );
};

export const MenuItem = ({ linkHref, menuTitle, menuIcon }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95">
      <Menu.Items className={` lg:hidden 2xl:block`}>
        <div className={`mb-1 last:mb-0`}>
          <Menu.Item>
            {({ active }) => (
              <Link href={linkHref}>
                <a
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 mt-2`}>
                  {/* <div className="flex items-center">
                    <span className="text-sm font-medium duration-200 ml-9 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      {menuTitle}
                    </span>
                  </div> */}
                  <div className="flex items-center space-x-3 ml-9">
                    {menuIcon || null}
                    <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      {menuTitle}
                    </span>
                  </div>
                </a>
              </Link>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  );
};

const SidebarLinkGroup = ({ children, activeCondition }) => {
  return (
    <div
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activeCondition && "bg-slate-900"
      }`}>
      <Menu
        as="div"
        className={`block truncate transition duration-150 text-slate-200 hover:text-white`}>
        {children}
      </Menu>
    </div>
  );
};

export default SidebarLinkGroup;
