import React from 'react'
import CartItem from './CartItem'
import PlaceholderImg from "@/public/images/body1.jpg"

const CartDrawer = () => {
  return (
    <div className='grid grid-cols-2 border-y border-black/10 py-10 gap-10'>
      <CartItem image={PlaceholderImg}
        type={"V-Neck T-Shirt"}
        name={"Embroidered Seersucker Shirt"}
        price={"$99"} />
      <CartItem image={PlaceholderImg}
        type={"V-Neck T-Shirt"}
        name={"Embroidered Seersucker Shirt"}
        price={"$99"} />
    </div>
  )
}

export default CartDrawer