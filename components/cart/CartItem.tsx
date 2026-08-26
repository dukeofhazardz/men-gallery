import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteIcon from '@/public/icons/favorite-icon.svg'
import CloseIcon from '@/public/icons/close-icon.svg'
import RevertIcon from '@/public/icons/revert-icon.svg'
import { StaticImageData } from 'next/image'
import ColorBox from '../ui/ColorBox'
import CartQuantitySelector from './CartQuantitySelector'

type CartItemProps = {
    name: string;
    type: string;
    price: string | number;
    image: StaticImageData;
};

const CartItem = ({ name, type, price, image }: CartItemProps) => {
    return (
        <div className='flex flex-row justify-center items-start gap-3'>
            {/* Cart Item */}
            <div className="flex flex-col w-80 h-fit justify-between items-center">
                <div className="w-full h-95 border border-black/10 overflow-hidden relative">
                    <Link href={"/shop/product/1"}>
                        <Image className="w-full h-full object-cover" src={image} alt="Placeholder Image" />
                    </Link>
                    <div className="flex justify-center items-center w-10 h-10 bg-white/90 absolute bottom-0 right-0 cursor-pointer">
                        <Image src={FavoriteIcon} alt='Favorite Icon' />
                    </div>
                </div>
                {/* Cart Item Details */}
                <div className="flex flex-col w-full mt-5">
                    <p className="text-xs text-black/50">{type}</p>
                    <div className="flex flex-row justify-between items-center mt-2">
                        <p className="text-sm">{name}</p>
                        <p className="text-sm">{price}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-start items-center gap-20'>
                <Image className='cursor-pointer' src={CloseIcon} alt='Close Icon' />

                <div className='flex flex-col gap-5 justify-center items-center'>
                    <p>L</p>
                    <ColorBox name='black' color='#000' />
                    <CartQuantitySelector />
                    <Image className='cursor-pointer' src={RevertIcon} alt='Revert Icon' />
                </div>
            </div>
        </div>
    )
}

export default CartItem