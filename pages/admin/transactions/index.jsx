import React, { useState } from "react";
import Layout from "../../../components/layout";
import ThreeDTransactions from "../../../components/Transactions/threeDTransactions";
import TwoDTransactions from "../../../components/Transactions/twoDtransactions";

function TransactionPage() {
  const [selected, setSelected] = useState('2d')
  const [formData, setformData] = useState({
     
  })
   
  return (
    <Layout>
      <div className='w-full my-3 max-w-sm flex flex-row justify-between items-center content-center'>
          <button onClick={()=>{setSelected('2d')}} className={`border border-slate-700 justify-center items-center content-center flex w-full px-2 py-2 rounded-l-full ${selected==='2d'?'bg-slate-700 text-white':'bg-white text-slate-700'}`}>
            2D
          </button>
          <button onClick={()=>{setSelected('3d')}} className={`border border-slate-700 justify-center items-center content-center flex w-full px-2 py-2 rounded-r-full ${selected==='3d'?'bg-slate-700 text-white':'bg-white text-slate-700'}`}>
            3D
          </button>
      </div>
      {
        selected==='2d' && <TwoDTransactions />
      }
     
      {
        selected ==='3d' &&  <ThreeDTransactions />
      }
    </Layout>
  );
}

export default TransactionPage;
