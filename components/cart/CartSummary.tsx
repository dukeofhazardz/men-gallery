import React from 'react'
import CheckBox from '../ui/CheckBox'
import Button from '../ui/Button'

const CartSummary = () => {
  return (
    <div className='flex flex-col justify-center items-start box-border gap-5 border border-black/10 px-5 py-15'>
      <h3 className='uppercase'>Order Summary</h3>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between w-70 max-w-70'>
          <p className='text-sm'>Subtotal</p>
          <p className='text-sm'>$180</p>
        </div>
        <div className='flex flex-row justify-between w-70 max-w-70'>
          <p className='text-sm'>Shipping</p>
          <p className='text-sm'>$10</p>
        </div>

      </div>
      <div className='flex flex-row justify-between items-center border-t border-t-black/10 py-10 w-70 max-w-70'>
        <p className='uppercase'>Total <span className='text-sm text-black/50'>(Tax Incl.)</span></p>
        <p>$190</p>
      </div>
      <div className='flex flex-row items-center gap-3'>
        <CheckBox />
        <p className='text-xs font-light'>I agree to the Terms and Conditions</p>
      </div>
      <Button text='Continue' />
    </div>
  )
}

export default CartSummary