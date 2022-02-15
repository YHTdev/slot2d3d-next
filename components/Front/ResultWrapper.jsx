import React from 'react'

function ResultWrapper({children,className}) {
  return (
    <div className='flex w-full px-2 py-2 flex-col my-6'>
            {children}
    </div>
  )
}

export default ResultWrapper