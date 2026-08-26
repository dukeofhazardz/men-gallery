import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo/logo-dual.png'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-between p-10 items-center bg-black/5 min-h-120 w-full'>
      <div className='flex flex-row justify-between items-center w-full max-w-250'>
        <div className='flex flex-col gap-1'>
          <Link href={"#contact"}>Contact</Link>
          <Link href={"#about"}>About</Link>
        </div>
        <div className='flex flex-col'>
          <Image className='w-30' src={Logo} alt='Logo Img' />
          <h1 className='text-7xl uppercase font-extrabold font-mono -tracking-widest'>Men</h1>
          <h2 className='text-7xl uppercase font-extrabold font-mono -tracking-widest'>Gall</h2>
          <h2 className='text-7xl uppercase font-extrabold font-mono -tracking-widest'>ery</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <p>Follow us on</p>
          <Link className='text-black/50' target='_blank' href={"https://facebook.com"}>Facebook</Link>
          <Link className='text-black/50' target='_blank' href={"https://instagram.com"}>Instagram</Link>
        </div>
      </div>
      <div>
        <p className='text-black/50 font-light'>© Men Gallery 2026 — Powered by Mykbee Syergies.</p>
      </div>
    </footer>
  )
}

export default Footer