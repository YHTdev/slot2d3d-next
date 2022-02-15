import React, { useState } from "react";

import PageWrapper from "../components/PageWrapper";
function Result({}) {
  const [selected, setSelected] = useState('2d');
  return (
    <PageWrapper>
      <div className="flex justify-center items-center  content-center h-screen overflow-y-scroll py-32" data-aos="zoom-in-up">
        <div className="block w-full max-w-screen-lg bg-slate-900 px-2 py-2 bg-opacity-50">
         {/* title */}
        <div className="flex w-full flex-col md:flex-row justify-center md:justify-between mb-3  items-center content-center ">
        <div className="w-full py-4 flex flex-row  max-w-screen-xs">
              <button onClick={()=>{setSelected('2d')}} className={`${selected==='2d'?'bg-yellow-400':'bg-slate-700'} text-white border-r hover:bg-yellow-400 border-slate-600 rounded-l-full focus:outline-none w-full flex justify-center items-center content-center bg-opacity-70 px-2 py-2`}>
                    <span className='tracking-widest text-sm uppercase'>
                        2D ပေါက်ဂဏန်းများ
                    </span>
              </button>
              <button  onClick={()=>{setSelected('3d')}}  className={`${selected==='3d'?'bg-yellow-400':'bg-slate-700'} text-white hover:bg-yellow-400 rounded-r-full w-full flex focus:outline-none justify-center items-center content-center bg-opacity-70 px-2 py-2`}>
              <span className='tracking-widest text-sm uppercase'>
                        3D ပေါက်ဂဏန်းများ
                    </span>
              </button>
          </div>
         <div className="w-full px-4">
         <input type="date" className='bg-slate-800 tracking-widest w-full text-white rounded-md px-2 py-1' />
         </div>
        </div>
         {/* end title */}
          {/* header */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 text-yellow-400 border border-slate-600 px-2 py-1">
              <span className="text-center flex w-full justify-start items-center content-center space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-alarm-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                </svg>
                <span>အချိန်</span>
              </span>
            </div>
           
            
            <div className="col-span-6 text-yellow-400 md:col-span-6 border border-slate-600 px-2 py-1">
              <span className="text-center flex w-full justify-start items-center content-center space-x-2  text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clipboard-data"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
                <span>2D ပေါက်ဂဏန်း</span>
              </span>
            </div>
          </div>
          {/* header */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">
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
              </span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm ">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm ">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm ">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm ">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-6 md:col-span-6 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="col-span-6 md:col-span-6  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm ">48</span>
            </div>
          </div>
          {/* end body */}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Result;
