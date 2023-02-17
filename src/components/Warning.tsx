import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Warning = () => {

  const [warning, setWarning] = useState(true)

  const handleWarning = () => {
      setWarning(!warning)
      
      
  }

  return (
    <div className={warning? 'fixed left-0 top-0 w-full h-screen bg-black/70':'hidden'}>
        <div className='fixed md:left-[25%] md:right-[25%] top-[25%] w-full md:w-[50%] h-[50%] bg-[#F6FFF8] rounded-xl'>
          <div onClick={handleWarning} className='p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer'>
            <AiOutlineClose/>
          </div>
        </div>
    </div>
  )
}

export default Warning