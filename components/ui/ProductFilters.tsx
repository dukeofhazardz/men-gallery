import React from 'react'
import Filterbox from './Filterbox'

const ProductFilters = () => {
  return (
    <div className='grid grid-cols-4 gap-1'>
        <Filterbox name={'New'} />
        <Filterbox name={'Senator'} />
        <Filterbox name={'Agbada'} />
        <Filterbox name={'Kaftan'} />
        <Filterbox name={'T Shirts'} />
        <Filterbox name={'Shirt'} />
        <Filterbox name={'Shorts'} />
        <Filterbox name={'Top'} />
    </div>
  )
}

export default ProductFilters