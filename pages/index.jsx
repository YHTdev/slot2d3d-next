import React, { useState } from "react";

import Image from "next/image";
import PageWrapper from "../components/PageWrapper";

function Home() {
  const [selected, setSelected] = useState('2d');
  return (
   <PageWrapper>
      <div className="flex justify-center w-full items-center content-center h-screen" data-aos="zoom-in-up">
      <div className="block w-full bg-transparent  bg-opacity-25 px-2 py-2 shadow-md rounded-sm max-w-screen-xl">
          <div className="w-full py-4 flex flex-row max-w-screen-xs">
              <button onClick={()=>{setSelected('2d')}} className={`${selected==='2d'?'bg-yellow-400':'bg-slate-700'} text-white border-r hover:bg-yellow-400 border-slate-600 rounded-l-full focus:outline-none w-full flex justify-center items-center content-center bg-opacity-70 px-2 py-2`}>
                    <span className='tracking-widest text-sm uppercase'>
                        2D
                    </span>
              </button>
              <button  onClick={()=>{setSelected('3d')}}  className={`${selected==='3d'?'bg-yellow-400':'bg-slate-700'} text-white hover:bg-yellow-400 rounded-r-full w-full flex focus:outline-none justify-center items-center content-center bg-opacity-70 px-2 py-2`}>
              <span className='tracking-widest text-sm uppercase'>
                        3D
                    </span>
              </button>
          </div>
         <div>
           <Image alt='' src='/images/home/2d-ori.png' width={30} height={30}  />
         </div>
        <div className="grid grid-flow-row grid-cols-12 gap-8">
          <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
            <h6 className="text-sm font-thin text-white mb-2">
              Thailand working days
            </h6>
            <div className="flex w-full justify-between items-center content-center">
              <span className="text-xs font-thin">9:30AM-12:01PM</span>
              <span className="text-xs font-thin">2:00PM-4:30PM</span>
            </div>
          </div>
          <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
            <div className="flex w-full justify-between items-center content-center">
            <h6 className="text-sm font-thin text-white w-full mb-2">
              SET market
            </h6>
            <h6 className="text-sm font-thin text-white w-full mb-2">
              To open(I)
            </h6>
            </div>
            <div className="flex w-full justify-between items-center content-center">
              <span className="text-xs text-red-500 font-thin w-full">Closed</span>
              <div className="text-xs font-thin w-full flex space-x-2">
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center border border-slate-800"> {new Date().getHours()} </span> <span className="flex justify-center items-center content-center px-2 py-1">:</span>
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center border border-slate-800"> {new Date().getMinutes()} </span> <span className="flex justify-center items-center content-center px-2 py-1">:</span>
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center border border-slate-800"> {new Date().getUTCSeconds()} </span>
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center"> AM </span>
              </div>
            </div>
          </div>
          <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
            <div className="flex w-full justify-between items-center content-center">
            <h6 className="text-sm font-thin text-white w-full mb-2">
             SET
            </h6>
            <h6 className="text-sm font-thin text-white w-full mb-2">
             VALUE
            </h6>
            <h6 className="text-sm font-thin text-white w-full mb-2">
             2D Real Time
            </h6>
            </div>
            <div className="flex w-full justify-between items-center content-center">
            <p className="text-xs font-thin text-yellow-400 w-full mb-2">
            1677.24
            </p>
            <p className="text-xs font-thin text-yellow-400 w-full mb-2">
            76267.45
            </p>
            <p className="text-xs font-bold text-green-600 w-full mb-2">
            47
            </p>
            </div>
          </div>
        </div>
        <div className='mt-4'>
           <Image alt='' src='/images/home/2d.png' width={30} height={30}  />
         </div>
        <div className="grid grid-flow-row grid-cols-12 gap-8">
          <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
            <h6 className="text-sm font-thin text-white mb-2">
              Thailand working days
            </h6>
            <div className="flex w-full justify-between items-center content-center">
              <span className="text-xs font-thin">9:30AM-12:01PM</span>
              <span className="text-xs font-thin">2:00PM-4:30PM</span>
            </div>
          </div>
          <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
            <div className="flex w-full justify-between items-center content-center">
            <h6 className="text-sm font-thin text-white w-full mb-2">
              SET market
            </h6>
            <h6 className="text-sm font-thin text-white w-full mb-2">
              To open(I)
            </h6>
            </div>
            <div className="flex w-full justify-between items-center content-center">
              <span className="text-xs text-red-500 font-thin w-full">Closed</span>
              <div className="text-xs font-thin w-full flex space-x-2">
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center border-slate-800 border"> {new Date().getHours()} </span> <span className="flex justify-center items-center content-center px-2 py-1">:</span>
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center border-slate-800  border"> {new Date().getMinutes()} </span> <span className="flex justify-center items-center content-center px-2 py-1">:</span>
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center border-slate-800 border"> {new Date().getUTCSeconds()} </span>
                  <span className="px-2 py-1 rounded-md flex justify-center items-center content-center"> AM </span>
              </div>
            </div>
          </div>
          <div className="px-2 py-2 text-yellow-400 hover:shadow-lg rounded-sm bg-opacity-70 bg-slate-800 shadow col-span-12 md:col-span-4">
            <div className="flex w-full justify-between items-center content-center">
            <h6 className="text-sm font-thin text-white w-full mb-2">
             SET
            </h6>
            <h6 className="text-sm font-thin text-white w-full mb-2">
             VALUE
            </h6>
            <h6 className="text-sm font-thin text-white w-full mb-2">
             2D Real Time
            </h6>
            </div>
            <div className="flex w-full justify-between items-center content-center">
            <p className="text-xs font-thin text-yellow-400 w-full mb-2">
            1677.24
            </p>
            <p className="text-xs font-thin text-yellow-400 w-full mb-2">
            76267.45
            </p>
            <p className="text-xs font-bold text-green-600 w-full mb-2">
            47
            </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center w-full items-center content-center">
         
        </div>
      </div>
    </div>
   </PageWrapper>
  );
}

export default Home;
