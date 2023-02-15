import React from 'react'
import ButtonLink from '@/components/layout/ButtonLink'

const Header = () => {
    return (
        <header>
            <nav className='py-5 bg-gray-900'>
                <div className='container flex flex-wrap items-center  justify-between mx-auto'>
                    <a href="" className='flex items-center'>
                        <img src="/logo.png" alt="logo" width={36} height={36} className='mr-1' />
                        <span className='self-center text-xl font-semibold text-green-200'>
                            Bamboo
                        </span>
                    </a>
                    <div>
                        <ul className='flex p-4 mt-4'>
                            <li>
                                <a href="" className=' text-white px-3 font-semibold py-2'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="" className=' text-white px-3 font-semibold py-2'>
                                    Service
                                </a>
                            </li>
                            <li>
                                <a href="" className=' text-white px-3 font-semibold py-2'>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header