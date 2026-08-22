import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '@/public/icons/menu-icon.svg'
import Favorites from '@/public/icons/favorites.svg'
import Profile from '@/public/icons/profile.svg'
import Cart from '@/public/icons/cart.svg'
import Logo from '@/public/icons/logo.svg'
import Wrapper from './Wrapper'

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 w-full py-10 backdrop-blur-md'>
            <Wrapper>
                <div className='flex flex-row justify-between items-center box-border w-full'>
                <div className='flex flex-row gap-10'>
                    <Image className='max-h-5 cursor-pointer' src={Menu} alt='Menu Icon' />
                    <Link href={"#home"}>Home</Link>
                    <Link href={"#collections"}>Collections</Link>
                    <Link href={"#new"}>New</Link>
                </div>

                <div>
                    <Link href={"#"}><Image src={Logo} alt='Logo Image' /></Link>
                </div>

                <div className='flex flex-row gap-10'>
                    <Link href={"#favorites"}>
                        <Image src={Favorites} alt='Favorites Icon' />
                    </Link>

                    <Link href={"#cart"}>
                        <Image src={Cart} alt='Cart Icon' />
                    </Link>

                    <Link href={"#profile"}>
                        <Image src={Profile} alt='Profile Icon' />
                    </Link>
                </div>
                </div>
            </Wrapper>
        </nav>
    )
}

export default Navbar