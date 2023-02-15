import React from 'react'

type ButtonLinkType = {
    title: string;
}

const ButtonLink = ({ title }: ButtonLinkType) => {
    return (
        <button>
            <a href="" className='text-white'>
                HEI
            </a>
        </button>
    )
}

export default ButtonLink