import React, { Children } from 'react'

export const Button = ({children, onClick}) => {
  return (
    <button 
        onClick={onClick}
        className='mt-5 mb-4 w-full bg-sky-200 hover:bg-sky-300 text-sky-900 font-semibold py-2 px-6 rounded-lg shadow-sm transition-colors cursor-pointer'
       >{children}
    </button>
  )
}
