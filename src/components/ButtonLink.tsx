import React, { useState } from 'react'
import Warning from './Warning';

type ButtonLinkType ={
    title : string;
}


const ButtonLink = ({title} : ButtonLinkType) => {

  return (
    <div  className='flex justify-center' >
       <a className='text-center shadow-lg shadow-gray-300 py-3 px-5 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-[#CCE3DE]'>{title}</a>

    </div>
  )
}

export default ButtonLink