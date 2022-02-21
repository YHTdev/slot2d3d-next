import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

import UserAvatar from "../public/images/user-avatar-32.png";
import Link from "next/link";
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
const DropdownProfile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium ">
            <Image
              className="w-8 h-8 rounded-full "
              src={UserAvatar}
              width={32}
              height={32}
              alt="User"
            />
            <div className="flex items-center truncate group">
              <span className="ml-2 text-sm font-medium text-blue-900 truncate group-hover:text-blue-600">
                {user?.phone}
              </span>
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1 text-blue-900 group-hover:text-blue-600"
                aria-hidden="true"
              />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="px-2 py-2">
                  <p className="text-lg text-slate-900">{user?.phone}</p>
                  <span className="text-sm font-light text-slate-600">
                    {user?.role}
                  </span>
                </div>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-900 text-slate-200" : "text-blue-900"
                    } group  rounded-md w-full px-2 py-2 text-sm`}>
                    <Link href="/setting">
                      <a className="flex items-center ">
                        <LogoutIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                        Logout
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownProfile;
