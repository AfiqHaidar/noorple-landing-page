import React, { useState } from 'react'
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import Warning from './Warning';


const Reason = () => {

    const [warning, setWarning] = useState(false)

    const handleWarning = () => {
        setWarning(!warning)
    }

  return (
  <div id='reason' className='w-full  p-2' >
    <div className='flex justify-center pt-10 tracking-widest'>
        <h2 className='font-normal'>Why HelloFood?</h2>
    </div>
    <div className='w-full mx-auto flex flex-col justify-center'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-16 py-16 px-16'>

        <div className='p-6 shadow-xl rounded-xl hover:scale-125 hover:bg-[#CCE3DE] ease-in duration-300'>
            <div className='grid grid-cols-1 gap-45 justify-center items-center '>
            <div className='m-auto'>
                <Image src='/shipped.png' alt='/' width={100} height={100} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Fast Shipment</h3>
                <p>Brings your order as fast as lightning</p>
            </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-125 hover:bg-[#CCE3DE] ease-in duration-300'>
            <div className='grid grid-cols-1 gap-45 justify-center items-center '>
            <div className='m-auto'>
                <Image src='/vegetable.png' alt='/' width={100} height={100} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Quality Ingredients</h3>
                <p>Always brings fresh produce daily</p>
            </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-125 hover:bg-[#CCE3DE] ease-in duration-300'>
            <div className='grid grid-cols-1 gap-45 justify-center items-center '>
            <div className='m-auto'>
                <Image src='/recipe.png' alt='/' width={100} height={100} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Best Recipe</h3>
                <p>Written by only the best of the best</p>
            </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-125 hover:bg-[#CCE3DE] ease-in duration-300'>
            <div className='grid grid-cols-1 gap-45 justify-center items-center '>
            <div className='m-auto'>
                <Image src='/dish.png' alt='/' width={100} height={100} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Variety Dishes</h3>
                <p>Never get bored from the same food</p>
            </div>
            </div>
        </div>


        </div>
    </div >
    <div onClick={handleWarning}>
        <ButtonLink title='Get Started!'/>
    </div>
    <div className={warning? '':'hidden'}>
            <Warning />
        </div>
  </div>
  )
}

export default Reason