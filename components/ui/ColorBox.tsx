import React from 'react'

type ColorBoxProps = {
    name: string
    color: string
}

const ColorBox = ({ name, color }: ColorBoxProps) => {
    return (
        <div
            className='w-7 h-7 flex justify-center items-center cursor-pointer'
            style={{ backgroundColor: color }}
            title={name}
        >
        </div>
    )
}

export default ColorBox