"use client"

import React from 'react'
import { useState } from 'react'

const CartQuantitySelector = () => {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className='flex flex-col w-7'>
            <div
                className='flex justify-center items-center border border-black h-7 cursor-pointer'
                onClick={() => setQuantity(quantity + 1)}>
                <p >+</p>
            </div>

            <input
                type='number'
                className='text-xs text-black w-7 h-7 text-center leading-7 p-0 border border-black
               [appearance:textfield]
               [&::-webkit-outer-spin-button]:appearance-none
               [&::-webkit-inner-spin-button]:appearance-none'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <div
                className='flex justify-center items-center border border-black h-7 cursor-pointer'
                onClick={
                    () => quantity >= 1 ? setQuantity(quantity - 1) : setQuantity(1)
                }>
                <p>-</p>
            </div>
        </div>
    )
}

export default CartQuantitySelector