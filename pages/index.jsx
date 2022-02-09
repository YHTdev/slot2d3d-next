import React, { useState } from "react";

import Image from "next/image";
import PageWrapper from "../components/PageWrapper";
import Timer from "../components/CountDown";

function Home() {
  const [selected, setSelected] = useState("2d");
  const hour = new Date().getHours()+1;
  const minute = new Date().getMinutes()+10;
  return (
    <PageWrapper>
      <div
        className="flex justify-center w-full  items-center content-center  h-screen overflow-y-scroll py-24"
        data-aos="zoom-in-up"
      >
        <div className="block w-full bg-transparent  bg-opacity-25 px-2 py-2 shadow-md rounded-sm max-w-screen-xl">
          <div className="w-full py-4 flex flex-row max-w-screen-xs">
            {/* switcher */}
            <button
              onClick={() => {
                setSelected("2d");
              }}
              className={`${
                selected === "2d" ? "bg-yellow-400" : "bg-slate-700"
              } text-white border-r hover:bg-yellow-400 border-slate-600 rounded-l-full focus:outline-none w-full flex justify-center items-center content-center bg-opacity-70 px-2 py-2`}
            >
              <span className="tracking-widest text-sm uppercase">2D</span>
            </button>
            <button
              onClick={() => {
                setSelected("3d");
              }}
              className={`${
                selected === "3d" ? "bg-yellow-400" : "bg-slate-700"
              } text-white hover:bg-yellow-400 rounded-r-full w-full flex focus:outline-none justify-center items-center content-center bg-opacity-70 px-2 py-2`}
            >
              <span className="tracking-widest text-sm uppercase">3D</span>
            </button>
            {/* switcher */}
          </div>
          {selected === "2d" && (
            <div>
              <Image
                alt=""
                src="/images/home/2d-ori.png"
                width={30}
                height={30}
              />
            </div>
          )}
          {selected === "2d" && (
             <div className="grid grid-flow-row grid-cols-12 gap-8" data-aos='zoom-in-up'>
             <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
               <h6 className="text-lg font-medium text-white mb-2">
                 Thailand working days
               </h6>
               <div className="flex w-full justify-between items-center content-center">
                 <span className="text-sm font-medium border border-slate-800 px-2 rounded-md">9:30AM-12:01PM</span>
                 <span className="text-sm font-medium border border-slate-800 px-2 rounded-md">2:00PM-4:30PM</span>
               </div>
             </div>
             <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
               <div className="flex w-full justify-between items-center content-center">
                 <h6 className="text-lg font-thin text-white w-full mb-2">
                   SET market
                 </h6>
                 <h6 className="text-lg font-thin text-white w-full mb-2">
                   To open(I)
                 </h6>
               </div>
               <div className="flex w-full justify-between items-center content-center">
                <div className="w-full">
                <span className="text-sm border-green-400 text-green-200 px-2  rounded-lg border font-thin">
                   Opened
                 </span>
                </div>
                 <div className="text-sm font-thin w-full flex space-x-2">
                  <Timer hour={hour} minute={minute} />
                 </div>
               </div>
             </div>
             <div className="px-2 py-2 text-white hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
                <div className="flex w-full flex-col space-y-2 justify-center items-center content-center">
                     <h6 className="text-lg tracking-widest">Real time 2D</h6>
                     <p className="text-yellow-400">
                     <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     className="bi bi-boxes animate-spin"
                     viewBox="0 0 16 16"
                   >
                     <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                   </svg>
                     </p>
                </div>
             </div>
           </div>
          )}
          {selected === "3d" && (
            <div className="">
              <Image alt="" src="/images/home/2d.png" width={30} height={30} />
            </div>
          )}
          {selected === "3d" && (
             <div className="grid grid-flow-row grid-cols-12 gap-8" data-aos='zoom-in-up'>
             <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
               <h6 className="text-lg font-medium text-white mb-2">
                 Thailand working days
               </h6>
               <div className="flex w-full justify-between items-center content-center">
                 <span className="text-sm font-medium border border-slate-800 px-2 rounded-md">9:30AM-12:01PM</span>
                 <span className="text-sm font-medium border border-slate-800 px-2 rounded-md">2:00PM-4:30PM</span>
               </div>
             </div>
             <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
               <div className="flex w-full justify-between items-center content-center">
                 <h6 className="text-lg font-thin text-white w-full mb-2">
                   SET market
                 </h6>
                 <h6 className="text-lg font-thin text-white w-full mb-2">
                   To open(I)
                 </h6>
               </div>
               <div className="flex w-full justify-between items-center content-center">
                <div className="w-full">
                <span className="text-sm border-red-400 text-red-200 px-2  rounded-lg border font-thin">
                   Closed
                 </span>
                </div>
                 <div className="text-sm font-thin w-full flex space-x-2">
                 <Timer hour={hour} minute={minute} />
                 </div>
               </div>
             </div>
             <div className="px-2 py-2 text-white hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
                <div className="flex w-full flex-col space-y-2 justify-center items-center content-center">
                     <h6 className="text-lg tracking-widest">Real time 3D</h6>
                     <p className="text-yellow-400">
                     <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     className="bi bi-boxes animate-spin"
                     viewBox="0 0 16 16"
                   >
                     <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                   </svg>
                     </p>
                </div>
             </div>
           </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
