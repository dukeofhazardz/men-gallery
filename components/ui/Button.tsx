import React from 'react'

type ButtonProps = {
    text: string
}
const Button = ({ text }: ButtonProps) => {
    return (
        <button
            className='bg-black/10 px-6 py-3 w-70 max-h-12 uppercase'
        >
            {text}
        </button>
    )
}

export default Button