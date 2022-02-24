import React from 'react'
import TopyIcon from '../../Icons/TopyIcon'

function ResultLst({results=[]}) {
  return (
    <div className=" w-full block" data-aos="zoom-in-up">
      {
          results.map((result,i)=>(
            <div className="grid grid-cols-12 gap-4 mb-4 px-2 py-2 rounded-md bg-slate-900 bg-opacity-50" key={i}>
            <div className="col-span-6">
              <div className="flex flex-row space-x-8 justify-start items-center content-center">
                <TopyIcon />
                <span className="text-slate-50 text-base">{result.session?result.session.name:''}</span>
              </div>
            </div>
            <div className="col-span-6">
              <span className="text-lg result_font font-bold tracking-widest text-yellow-400">{result.num?result.num.num:""}</span>
            </div>
          </div>
          ))
      }
  </div>
  )
}

export default ResultLst