import React from 'react'
import "./index.css"

const Spinner = () => {
  return (
      <div className=' h-[70vh] flex flex-col justify-center items-center gap-y-2'>
      <div className="custom-loader "></div>
      <p className=' font-bold'>Loading...</p>
    </div>
  )
}

export default Spinner;