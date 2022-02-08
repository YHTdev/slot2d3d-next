import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import DropdownProfile from "../DropdownProfile";

const Header = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              aria-controls="sidebar"
              onClick={() => setSideBarOpen(!sideBarOpen)}
              className=" text-slate-500 hover:text-slate-600">
              <span className="sr-only ">Open Sidebar</span>
              <MenuIcon className="w-6 h-6 " />
            </button>
          </div>
          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <button className="flex items-center justify-center w-8 h-8 ml-3 transition duration-150 rounded-full bg-slate-100 hover:bg-slate-200">
              <SearchIcon className="w-4 h-4 " />
            </button>
            <DropdownProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
