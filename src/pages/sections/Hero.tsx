import ButtonLink from '@/components/ButtonLink'
import React from 'react'

const Hero = () => {
    return (
        <section id='banner' className="bg-[url('/food.jpg')] bg-cover bg-no-repeat">
            <div className='layout flex flex-col justify-center min-h-screen text-center bg-[#00000075]'>
                <h1 className='text-6xl font-bold text-green-300'>
                    HelloFood
                </h1>
                <p className='text-xl font-normal text-green-400'>
                    FreshFood at Your DoorStep
                </p>
                <ButtonLink title='Learn More' />
            </div>
        </section>
    )
}

export default Hero