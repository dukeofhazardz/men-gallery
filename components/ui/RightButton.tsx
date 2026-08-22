import React from 'react'
import Image from 'next/image'
import RightIcon from "@/public/icons/right-icon.svg"

const RightButton = () => {
    return (
        <button className='p-5 max-h-12 border border-black/20 flex justify-center items-center cursor-pointer'>
            <Image className='w-2' src={RightIcon} alt='Right Icon' />
        </button>
    )
}

export default RightButton