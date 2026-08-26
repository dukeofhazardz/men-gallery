import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteIcon from "@/public/icons/favorite-icon.svg"
import Navbar from '@/components/layout/Navbar'
import Wrapper from '@/components/layout/Wrapper'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import CartSummary from '@/components/cart/CartSummary'

const Cart = () => {
    return (
        <>
            <Navbar />

            <Wrapper>
                <div className='flex flex-col gap-5 my-20'>
                    <div className='flex flex-row justify-start items-center gap-20'>
                        <Link href={"/cart"} className='uppercase text-black text-md'>shopping bag</Link>

                        <div className='flex flex-row justify-center items-center gap-2'>
                            <div className="flex justify-center items-center w-7 h-7 bg-white/90 cursor-pointer">
                                <Image src={FavoriteIcon} className='w-3' alt='Favorite Icon' />
                            </div>
                            <Link href={"/favorites"} className='uppercase text-black/50 text-sm'>favorites</Link>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <CartDrawer />
                        <CartSummary />
                    </div>
                </div>
            </Wrapper>

            <Footer />
        </>
    )
}

export default Cart