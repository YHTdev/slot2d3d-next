import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto ">
        <Header sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        <main>
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
