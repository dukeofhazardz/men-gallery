import React from 'react'
import Image from 'next/image'
import SearchIcon from '@/public/icons/search-icon.svg'

const Search = () => {
    return (
        <div className="flex items-center gap-3 bg-black/10 p-4 w-full max-w-85">
            <Image src={SearchIcon} alt='Search Icon' />
            <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-black text-sm text-right focus:outline-none placeholder:text-black/50"
            />
        </div>
    )
}

export default Search