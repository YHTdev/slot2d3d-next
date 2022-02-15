import React from 'react'

function PageInnerWrapper({children}) {
  return (
    <div className='block w-full  h-screen  overflow-y-auto text-white tracking-widest'>
          {children}
    </div>
  )
}

export default PageInnerWrapper