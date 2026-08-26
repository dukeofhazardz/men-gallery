import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Wrapper from '@/components/layout/Wrapper'
import ProductGrid from '@/components/product/ProductGrid'
import FilterSection from '@/components/layout/FilterSection'

const NewProducts = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <div className='flex flex-row justify-between mb-20'>
                    <div>
                        <FilterSection />
                    </div>
                    <div>
                        <h1 className='my-5'><span className='text-black/50'>Home / Products </span>/ New</h1>
                        <ProductGrid title='new this week' />
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}

export default NewProducts