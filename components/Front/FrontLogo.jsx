import Image from 'next/image'
import React from 'react'
function FrontLogo() {
  return (
    <div className=' h-28  bg-slate-800  bg-opacity-90 flex-col space-y-2 mb-6 flex w-full justify-center items-center content-center '>
        <Image src="/images/adminUsers/golden-21-flower.png" alt='' width={60} height={60} />
         <span className='hero_logo text-yellow-400 '> Golden 21 </span>
    </div>
  )
}

export default FrontLogo