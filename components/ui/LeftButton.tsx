import React from 'react'
import Image from 'next/image'
import LeftIcon from "@/public/icons/left-icon.svg"

const LeftButton = () => {
  return (
    <button className='p-5 max-h-12 border border-black/10 flex justify-center items-center cursor-pointer'>
        <Image className='w-2' src={LeftIcon} alt='Left Icon' />
    </button>
  )
}

export default LeftButton