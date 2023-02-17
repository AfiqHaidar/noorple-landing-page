import { truncate } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import Warning from './Warning'

const navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=>{
        const handleShade = () =>{
            if(window.scrollY >= 90){
                setShadow(true)
                
            }else{
                setShadow(false)
                
            }
        }
        window.addEventListener('scroll', handleShade);
        
    },[])

  return (
    <div className={shadow ? 'fixed w-full h-16 shadow-xl z-[100] bg-[#EAF4F480] ease-in duration-300' : 'fixed w-full h-16 z-[100] bg-[#EAF4F4] '} >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <img src="/logo.png" alt="logo" width={50} height={25} />
            <div >
            <ul className='hidden md:flex'>
                <Link href='/#her0'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#variety'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Our Menus</li>
                </Link>
                <Link href='/#reason'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Order Now</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Meal Plans</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About Us</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
    </div>
    <div className= {nav ? 'md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#EAF4F4] p-10 ease-in duration-500' : 
                                'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full item-center justify-between'>
             <img src="/logo.png" alt="logo" width={40} height={10}/>
             <div onClick={handleNav} className='p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer'>
             <AiOutlineClose/>
             </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>
                    #NusantaraFoodAtYourDoorstep
                </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                <Link href='/'>
                <li className='py-4 text-sm'>
                    Home
                </li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>
                    Our Menus
                </li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>
                    Order Now
                </li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>
                    Meal Plans
                </li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>
                    About Us
                </li>
                </Link>
            </ul>
            <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#6B9080]'>Let's Connect!</p>
                <div className='flex item-center justify-between my-4 w-full sm:w-[80%] '>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaFacebookMessenger/>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default navbar