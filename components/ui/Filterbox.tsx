import React from 'react'

type FilterboxProp = {
    name: string
}
const Filterbox = ({ name }: FilterboxProp) => {
  return (
    <div className='px-8 py-2 max-h-6 border border-black/10 flex justify-center items-center cursor-pointer'>
        <p className='uppercase text-sm font-light'>{name}</p>
    </div>
  )
}

export default Filterbox