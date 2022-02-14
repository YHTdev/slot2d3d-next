import React from 'react'

function Divider({title}) {
  return (
    <div className='px-3 py-2 rounded-sm mb-0.5 last:mb-0 '>
        <span className='ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100'>
        {title}
        </span>
    </div>
  )
}

export default Divider