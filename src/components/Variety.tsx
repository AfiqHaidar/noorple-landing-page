import React, { useState } from 'react'
import Image from 'next/image'
import meatImg from 'public/meat.png'
import veganImg from 'public/vegan.png'
import mexImg from 'public/mexican.png'
import seaImg from 'public/seafood.png'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Warning from './Warning'

const Variety = () => {

  const [warning, setWarning] = useState(false)

  const handleWarning = () => {
      // setWarning(true)
      if(warning == false)
      {
        setWarning(true) 
      }
      
  }

  return (
    <div id='variety' className=' w-full bg-gradient-to-b from-[#EAF4F4] to-[#6B9080]'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase'>Menus</p>
            <h2 className='py-2'>We Have A Wide Variety Of Recipes!</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#F6FFF8] rounded-xl p-4 group hover:bg-gradient-to-r from-[#abcfed] to-[#123456]'>
                    <Image className='rounded-xl group-hover:opacity-10'   src={meatImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider text-center'>MEAT</h3>
                      <p className='pb-4 pt-2 text-white text-center'> There has never been a bad day that can’t be solved by meat.</p>
                      
                        <p onClick={handleWarning} className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> See More</p>
                     
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#F6FFF8] rounded-xl p-4 group hover:bg-gradient-to-r from-[#abcfed] to-[#123456]'>
                    <Image className='rounded-xl group-hover:opacity-10'   src={seaImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider text-center'>SEAFOOD</h3>
                      <p className='pb-4 pt-2 text-white text-center'>Someone gonna look at you the way you look at seafood</p>
                     
                        <p onClick={handleWarning} className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>See More</p>
                     
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#F6FFF8] rounded-xl p-4 group hover:bg-gradient-to-r from-[#abcfed] to-[#123456]'>
                    <Image className='rounded-xl group-hover:opacity-10'   src={mexImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider text-center'>MEXICAN</h3>
                      <p className='pb-4 pt-2 text-white text-center'>Ways to My Heart: Buy Me Tacos, Make Me Tacos, Be Tacos</p>
                      
                        <p onClick={handleWarning} className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>See More</p>
                    
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#F6FFF8] rounded-xl p-4 group hover:bg-gradient-to-r from-[#abcfed] to-[#123456]'>
                    <Image className='rounded-xl group-hover:opacity-10'   src={veganImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider text-center'>VEGAN</h3>
                      <p className='pb-4 pt-2 text-white text-center'>It says “organic vegetable,” but it really means “grown in poop.”</p>
                     
                        <p onClick={handleWarning} className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>See More</p>
                     
                    </div>
                </div>

            </div>
            <div className='flex justify-center pt-20'>
              <Link href='/#hero'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 bg-[#EAF4F4]'>
                  <HiOutlineChevronDoubleUp className='m-auto' size={30}/>
                </div>
              </Link>
            </div>
        </div>
        <div className={warning? '':'hidden'}>
            <Warning />
        </div>
    </div>
  )
}

export default Variety