import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SizeBox from '@/components/ui/SizeBox'
import ColorBox from '@/components/ui/ColorBox'
import PlaceholderImg from "@/public/images/body1.jpg"
import Wrapper from '@/components/layout/Wrapper'
import Button from '@/components/ui/Button'
import FavoriteIcon from '@/public/icons/favorite-icon.svg'

const ProductDetails = () => {
    return (
        <>
            <Navbar />

            <Wrapper>
                <div className='flex flex-row justify-center gap-25 my-20'>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <div className='w-100 h-108 border border-black/10 overflow-hidden'>
                            <Image className="w-full h-full object-cover" src={PlaceholderImg} alt='Placeholder Image' />
                        </div>
                        <div className='flex flex-col justify-start gap-2'>
                            <div className='w-20 h-20 border border-black/10 overflow-hidden'>
                                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt='Placeholder Image' />
                            </div>
                            <div className='w-20 h-20 border border-black/10 overflow-hidden'>
                                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt='Placeholder Image' />
                            </div>
                            <div className='w-20 h-20 border border-black/10 overflow-hidden'>
                                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt='Placeholder Image' />
                            </div>
                            <div className='w-20 h-20 border border-black/10 overflow-hidden'>
                                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt='Placeholder Image' />
                            </div>
                            <div className='w-20 h-20 border border-black/10 overflow-hidden'>
                                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt='Placeholder Image' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-start p-10 border border-black/10 max-w-90 relative'>
                        <div>
                            <h3>ABSTRACT PRINT SHIRT</h3>
                            <p className='my-3'>$99</p>
                            <p className='text-black/50 text-sm mb-6'>MRP incl. of all taxes</p>
                            <p className='text-sm mb-10'>Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <p>Color</p>
                                <div className='flex flex-row gap-1 items-center'>
                                    <ColorBox name='grey' color='#808080' />
                                    <ColorBox name='white' color='#ffffff' />
                                    <ColorBox name='brown' color='#8B5E3C' />
                                    <ColorBox name='cream' color='#F5F0E1' />
                                    <ColorBox name='amber' color='#F59E0B' />
                                    <ColorBox name='purple' color='#8B5CF6' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p>Size</p>
                                <div className='flex flex-row gap-1 items-center'>
                                    <SizeBox name={'XS'} />
                                    <SizeBox name={'S'} />
                                    <SizeBox name={'M'} />
                                    <SizeBox name={'L'} />
                                    <SizeBox name={'XL'} />
                                    <SizeBox name={'2X'} />
                                </div>
                            </div>

                            <div className='flex flex-row justify-between items-center gap-2'>
                                <Link className='font-light uppercase text-xs text-black/50' href={"#sizes"}>Find your size</Link>
                                <p className='font-light uppercase text-xs text-black/50'>|</p>
                                <Link className='font-light uppercase text-xs text-black/50' href={"#guide"}>Measurement Guide</Link>
                            </div>
                            <Button text='Add' />
                        </div>

                        <div className='flex justify-center items-center w-10 h-10 bg-white/90 absolute top-0 right-0 cursor-pointer'>
                            <Image className='w-3.5' src={FavoriteIcon} alt='Favorite Icon' />
                        </div>
                    </div>
                </div>
            </Wrapper>

            <Footer />
        </>
    )
}

export default ProductDetails