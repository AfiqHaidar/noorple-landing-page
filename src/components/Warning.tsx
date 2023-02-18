import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Warning = () => {

  const [warning, setWarning] = useState(true)

  const handleWarning = () => {
      setWarning(!warning)
      
      
  }

  return (
    <div className={warning? 'fixed left-0 top-0 w-full h-screen bg-black/70':'hidden'}>
        <div className='fixed md:left-[25%] md:right-[25%] top-[25%] w-full md:w-[50%] h-[50%] rounded-xl bg-[#CCE3DE] '>

          <div className='p-3 rounded-b-2xl shadow-lg shadow-gray-400 flex bg-[#6B9080]'>
            <div className='rounded-full shadow-gray-300 hover:bg-[#F6FFF8] ease-in duration-200 cursor-pointer p-2' onClick={handleWarning}>
                <AiOutlineClose size={25}/>
            </div>
          </div>

          <div className=' flex-col text-center pt-6 '>
            <h1 className='pt-16 max-w-[60%] m-auto drop-shadow-2xl shadow-white '>
                Under Construction!
            </h1>
            <p className='pt-4'>
              sorry for the inconvenience
            </p>
            
          </div>

        </div>
    </div>
  )
}

export default Warning