import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className="bg-[url('/food.jpg')] bg-cover bg-no-repeat " >
    <div className='w-full h-screen text-center bg-[#00000075] sm:bg-[#00000000] '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest text-[#A4C3B2]'>
                masak tapi garibet?
            </p>
            <h1 className='py-4 '>
                <span className='text-[#A4C3B2]'>Hello</span>Fud!
            </h1>
            <p className='py-4 max-w-[50%] m-auto drop-shadow-lg shadow-black text-[#A4C3B2] sm:text-[#6B9080]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate id possimus. Vitae, aliquam! Necessitatibus, quasi sapiente. Ipsa amet veritatis ipsam quas! Quas sed aperiam rem assumenda! Itaque, dignissimos esse!
            </p>
            <div className='flex items-center justify-center max-w-[330px] m-auto py-20'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                    <AiOutlineArrowDown size={20}/>
                </div>
            </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero