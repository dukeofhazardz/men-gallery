import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Wrapper from '@/components/layout/Wrapper'
import ProductGrid from '@/components/product/ProductGrid'
import FilterSection from '@/components/layout/FilterSection'

const Shop = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <div className='flex flex-row justify-between mb-20'>
                    <div>
                        <FilterSection />
                    </div>
                    <div>
                        <h1 className='my-5'><span className='text-black/50'>Home</span> / Products</h1>
                        <ProductGrid title='products' />
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Shop