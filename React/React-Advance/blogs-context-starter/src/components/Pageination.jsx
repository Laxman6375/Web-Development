import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pageination = () => {

    const { page, handlePageChange, totalPages, darkMode } = useContext(AppContext);
  return (
      <div className={`${
      darkMode ? 'bg-black text-white border-black shadow-lg shadow-white' : 'bg-white text-black border-white'
    }  w-full flex justify-center items-center border-2 fixed bottom-0 shadow-lg`}>
          
          <div className='flex flex-row justify-between w-11/12 max-w-[670px] py-2'>
              <div className=' flex gap-x-2'>
                  { page > 1 &&
                  (
                  <button className=' rounded-md border-2 px-4 py-1' onClick={() => handlePageChange(page-1)}>
                      Previous
                  </button>
                  )
              }

              { page < totalPages &&
                  (
                   <button className=' rounded-md border-2 px-4 py-1' onClick={() => handlePageChange(page + 1)}>
                      Next
                  </button>
                 )
              }
              </div>

          <p className=' font-bold text-sm'>
              Page {page} of {totalPages}
              </p>
            </div>
    </div>
  )
}

export default Pageination;