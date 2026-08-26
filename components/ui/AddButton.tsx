import React from 'react'
import Image from 'next/image'
import AddIcon from "@/public/icons/add-icon.svg"

const AddButton = () => {
    return (
        <button className='p-3 max-h-12 bg-black/20 flex justify-center box-border items-center cursor-pointer'>
            <Image className='w-5' src={AddIcon} alt='Add to Cart Icon' />
        </button>
    )
}

export default AddButton