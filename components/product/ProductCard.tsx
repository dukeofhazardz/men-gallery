import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AddButton from '../ui/AddButton'
import { StaticImageData } from 'next/image'

type ProductCardProps = {
  productType: string;
  productName: string;
  productPrice: string | number;
  productImage: StaticImageData;
};

const ProductCard = ({ productType, productName, productPrice, productImage }: ProductCardProps) => {
  return (
    <div>
        {/* Product Card */}
            <div className="flex flex-col w-70 h-fit justify-between items-center">
              <div className="w-full h-70 border border-black/10 overflow-hidden relative">
                <Link href={"/shop/product/1"}>
                  <Image className="w-full h-full object-cover" src={productImage} alt="Placeholder Image" />
                </Link>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <AddButton />
                </div>
              </div>
              {/* Card Details */}
              <div className="flex flex-col w-full mt-5">
                <p className="text-xs text-black/50">{productType}</p>
                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-sm">{productName}</p>
                  <p className="text-sm">{productPrice}</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default ProductCard