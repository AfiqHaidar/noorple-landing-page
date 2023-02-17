import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import ButtonLink from './ButtonLink'
import Warning from './Warning'


const Hero = () => {

    const [warning, setWarning] = useState(false)

    const handleWarning = () => {
        setWarning(!warning)
    }
  return (
    <section className="bg-[url('/food2.jpg')] bg-cover bg-no-repeat " >
    <div id='hero' className='w-full  text-center bg-[#00000075] md:bg-[#00000000] '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center'>
            <div className='pt-72'>
            <h1 className='py-4 font-normal max-w-[60%] m-auto drop-shadow-2xl shadow-white text-black '>
                Take the stress out of mealtime
            </h1>
            <p className='pt-4 pb-20 max-w-[50%] m-auto tracking-widest drop-shadow-lg shadow-black'>
                recipe made with love
            </p>
            <div onClick={handleWarning}>
                 <ButtonLink title='View Plans'/>
            </div>
           
            <div className='flex items-center justify-center max-w-[330px] m-auto py-20'>
                <Link href='/#reason'>
                <div  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                    <AiOutlineArrowDown size={20}/>
                </div>
                </Link>
            </div>
            
            </div>
        </div>
    </div>
    <div className={warning? '':'hidden'}>
            <Warning />
        </div>
    </section>
  )
}

export default Hero