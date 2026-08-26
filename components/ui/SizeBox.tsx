import React from 'react'

type SizeBoxProps = {
    name: string
}

const SizeBox = ({ name }: SizeBoxProps) => {
  return (
    <div className='w-7 h-7 border border-black/50 flex justify-center items-center cursor-pointer'>
        <p className='uppercase text-sm font-light'>{name}</p>
    </div>
  )
}

export default SizeBox