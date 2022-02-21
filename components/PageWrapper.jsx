import React from "react";
import Head from "next/head";
import Link from "next/link";


function PageWrapper({ children }) {
  return (
    <div className="overflow-hidden tracking-widest bg-center bg-cover select-none md:bg-cover bg-slate-800 bg-opacity-90">
      <div className="h-screen overflow-hidden bg-no-repeat home_bg">
        <Head>
          <title>Golden 21</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        {children}
        <section className="fixed inset-x-0 bottom-0 z-10 block shadow-lg bg-slate-800">
          <div className="flex justify-between max-w-screen-lg mx-auto">
            <Link passHref href="/" className="w-full">
              <div className="flex flex-col items-center justify-center w-full px-2 py-2 border-r select-none text-slate-400 hover:text-slate-50 border-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-house-heart"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Zm-5-.225C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982Z"
                  />
                </svg>
                <span className="text-sm tracking-widest">မူလနေရာ</span>
              </div>
            </Link>
            <Link passHref href="/result" className="w-full">
              <div className="flex flex-col items-center justify-center w-full px-2 py-2 border-r select-none text-slate-400 hover:text-slate-50 border-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-clipboard-pulse"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Zm6.979 3.856a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.895-.133L4.232 10H3.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .416-.223l1.41-2.115 1.195 3.982a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h1.5a.5.5 0 0 0 0-1h-1.128L9.979 5.356Z"
                  />
                </svg>
                <span className="text-sm tracking-widest">ပေါက်စဉ်</span>
              </div>
            </Link>
            <Link passHref href="/auth/login" className="w-full">
              <div className="flex flex-col items-center justify-center w-full px-2 py-2 border-r select-none text-slate-400 hover:text-slate-50 border-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person-bounding-box"
                  viewBox="0 0 16 16">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <span className="text-sm tracking-widest result_font">Agent</span>
              </div>
            </Link>
           
          </div>
        </section>
      </div>
    </div>
  );
}

export default PageWrapper;
