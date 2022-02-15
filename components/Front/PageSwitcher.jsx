
import React from 'react'

function PageSwitcher({selected,setselected}) {
  return (
    <div className='w-full px-2 py-2 flex justify-between items-center content-center max-w-screen-md mx-auto'>
        <button onClick={()=>{setselected('2d')}} className={`border-slate-100 px-2 py-2 w-full border rounded-l-full justify-center items-center content-center flex-row space-x-2 ${selected==='2d' ? 'bg-yellow-500 text-white':'text-yellow-500'}`}>
             <span className='hero_logo'>2D</span>
        </button>
        <button onClick={()=>{setselected('3d')}} className={`border-slate-100  px-2 py-2 w-full border rounded-r-full justify-center items-center content-center flex-row space-x-2 ${selected==='3d' ? 'bg-yellow-500 text-white':'text-yellow-500'}`}>
               <span className='hero_logo'>3D</span>
        </button>
    </div>
  )
}

export default PageSwitcher