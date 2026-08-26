import React from 'react'
import ProductCard from './ProductCard'
import ProductFilters from '../ui/ProductFilters'
import Search from '../ui/Search'
import PlaceholderImg from "@/public/images/body1.jpg"

type ProductGridProp = {
    title: string
}

const ProductGrid = ({title}: ProductGridProp) => {
    return (
        <div className='flex flex-col justify-start'>
            <h1 className='text-3xl uppercase'>{title}</h1>
            <div className='flex flex-row justify-between items-center gap-5 my-3'>
                <Search />
                <ProductFilters />
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
                <ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                /><ProductCard
                    productImage={PlaceholderImg}
                    productType={"V-Neck T-Shirt"}
                    productName={"Embroidered Seersucker Shirt"}
                    productPrice={"$99"}
                />
            </div>
        </div>
    )
}

export default ProductGrid