import React from 'react'

import UiSinglePicker from '../../forms/UiSinglePicker'

function DateFilter ({ formData, setFormData }) {
  return (
    <div>
     <div className='flex w-full px-2 py-2 flex-col space-y-2 bg-slate-800 bg-opacity-80 rounded-md'>
          <span className='text-center w-full'> နေ့ရက်အလိုက်ရှာမယ် </span>
          <form onSubmit={e => e.preventDefault()}>
            <UiSinglePicker
              id='selectedDate'
              name='selectedDate'
              className='rounded-md bg-slate-800 text-white'
              formData={formData}
              setFormData={setFormData}
              maxDate={
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth(),
                  new Date().getDate() 
                )
              }
              minDate={
                new Date(
                  new Date().getFullYear() - 1,
                  new Date().getMonth(),
                  new Date().getDate()
                )
              }
            />
          </form>
        </div>
    </div>
  )
}

export default DateFilter
