import React, { useState } from "react";

import PageWrapper from "../components/PageWrapper";
function Result({}) {
  const [selected, setSelected] = useState('2d');
  return (
    <PageWrapper>
      <div className="flex justify-center items-center content-center h-screen" data-aos="zoom-in-up">
        <div className="block w-full max-w-screen-lg bg-slate-900 px-2 py-2 bg-opacity-50">
         {/* title */}
        <div className="flex w-full justify-between items-center content-center px-2 py-2">
        <div className="w-full py-4 flex flex-row max-w-screen-xs">
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
         <input type="month" className='bg-slate-800 text-white rounded-md px-2 py-1' />
        </div>
         {/* end title */}
          {/* header */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 text-yellow-400 border border-slate-600 px-2 py-1">
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
            <div className="col-span-3 text-yellow-400 md:col-span-3 border border-slate-600 px-2 py-1">
              <span className="text-center flex w-full justify-start items-center content-center space-x-2  text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-sort-numeric-down-alt"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
                  />
                  <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                </svg>
                <span>SET</span>
              </span>
            </div>
            <div className="col-span-3 text-yellow-400 md:col-span-3 border border-slate-600 px-2 py-1">
              <span className="text-center flex w-full justify-start items-center content-center space-x-2  text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-sort-numeric-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
                  <path
                    fillRule="evenodd"
                    d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
                  />
                  <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                </svg>
                <span>VALUE</span>
              </span>
            </div>
            <div className="col-span-3 text-yellow-400 md:col-span-3 border border-slate-600 px-2 py-1">
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
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm animate-ping">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
          {/* body */}
          <div className="grid grid-cols-12 text-xs md:text-sm">
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-xs text-slate-400">
                 {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-red-400"> {new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3 border border-slate-800 px-2 py-1">
              <span className="text-center text-green-400">{new Date().getTime().toString()}</span>
            </div>
            <div className="col-span-3 md:col-span-3  border border-slate-800 px-2 py-1">
              <span className="text-center w-full text-yellow-400 font-bold text-sm">48</span>
            </div>
          </div>
          {/* end body */}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Result;
