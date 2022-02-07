import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto ">
        <Header />
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
