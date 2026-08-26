'use client'

import React, { useState } from 'react'
import SizeBox from '../ui/SizeBox'
import CheckBox from '../ui/CheckBox'
import Image from 'next/image'
import UpIcon from '@/public/icons/up-icon.svg'
import RightIcon from '@/public/icons/right-icon.svg'

const FilterSection = () => {
    const [openSections, setOpenSections] = useState({
        availability: true,
        category: false,
        colors: false,
        priceRange: false,
        collections: false,
        tags: false,
    })

    const toggleSection = (key: keyof typeof openSections) => {
        setOpenSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    return (
        <div className='flex flex-col justify-start gap-5 mt-35'>
            <h2>Filters</h2>

            <div className='flex flex-col justify-start gap-1 mb-5'>
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

            {/* Availability DropDown */}
            <div className='flex flex-col border-t border-dashed border-t-black/20 pt-5'>
                <div
                    className='flex flex-row justify-between items-center cursor-pointer select-none'
                    onClick={() => toggleSection('availability')}
                >
                    <p>Availability</p>
                    <Image
                        className={`w-3 transition-transform duration-200 ${
                            openSections.availability ? '' : 'rotate-180'
                        }`}
                        src={UpIcon}
                        alt='Toggle Availability'
                    />
                </div>

                {openSections.availability && (
                    <div className='flex flex-col my-5'>
                        <div className='flex flex-row items-center gap-5 my-2'>
                            <CheckBox />
                            <p>Availability</p>
                            <p>(450)</p>
                        </div>
                        <div className='flex flex-row items-center gap-5 my-2'>
                            <CheckBox />
                            <p>Out of Stock</p>
                            <p>(15)</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Category DropDown */}
            <div className='flex flex-col border-t border-dashed border-t-black/20 pt-5'>
                <div
                    className='flex flex-row justify-between items-center cursor-pointer select-none'
                    onClick={() => toggleSection('category')}
                >
                    <p>Category</p>
                    <Image
                        className={`w-2 transition-transform duration-200 ${
                            openSections.category ? 'rotate-90' : ''
                        }`}
                        src={RightIcon}
                        alt='Toggle Category'
                    />
                </div>
                {openSections.category && (
                    <div className='flex flex-col my-5'>
                        {/* Category options go here */}
                    </div>
                )}
            </div>

            {/* Colors DropDown */}
            <div className='flex flex-col border-t border-dashed border-t-black/20 pt-5'>
                <div
                    className='flex flex-row justify-between items-center cursor-pointer select-none'
                    onClick={() => toggleSection('colors')}
                >
                    <p>Colors</p>
                    <Image
                        className={`w-2 transition-transform duration-200 ${
                            openSections.colors ? 'rotate-90' : ''
                        }`}
                        src={RightIcon}
                        alt='Toggle Colors'
                    />
                </div>
                {openSections.colors && (
                    <div className='flex flex-col my-5'>
                        {/* Color options go here */}
                    </div>
                )}
            </div>

            {/* Price Range DropDown */}
            <div className='flex flex-col border-t border-dashed border-t-black/20 pt-5'>
                <div
                    className='flex flex-row justify-between items-center cursor-pointer select-none'
                    onClick={() => toggleSection('priceRange')}
                >
                    <p>Price Range</p>
                    <Image
                        className={`w-2 transition-transform duration-200 ${
                            openSections.priceRange ? 'rotate-90' : ''
                        }`}
                        src={RightIcon}
                        alt='Toggle Price Range'
                    />
                </div>
                {openSections.priceRange && (
                    <div className='flex flex-col my-5'>
                        {/* Price range slider/inputs go here */}
                    </div>
                )}
            </div>

            {/* Collections DropDown */}
            <div className='flex flex-col border-t border-dashed border-t-black/20 pt-5'>
                <div
                    className='flex flex-row justify-between items-center cursor-pointer select-none'
                    onClick={() => toggleSection('collections')}
                >
                    <p>Collections</p>
                    <Image
                        className={`w-2 transition-transform duration-200 ${
                            openSections.collections ? 'rotate-90' : ''
                        }`}
                        src={RightIcon}
                        alt='Toggle Collections'
                    />
                </div>
                {openSections.collections && (
                    <div className='flex flex-col my-5'>
                        {/* Collection options go here */}
                    </div>
                )}
            </div>

            {/* Tags DropDown */}
            <div className='flex flex-col border-t border-dashed border-t-black/20 pt-5'>
                <div
                    className='flex flex-row justify-between items-center cursor-pointer select-none'
                    onClick={() => toggleSection('tags')}
                >
                    <p>Tags</p>
                    <Image
                        className={`w-2 transition-transform duration-200 ${
                            openSections.tags ? 'rotate-90' : ''
                        }`}
                        src={RightIcon}
                        alt='Toggle Tags'
                    />
                </div>
                {openSections.tags && (
                    <div className='flex flex-col my-5'>
                        {/* Tag options go here */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterSection