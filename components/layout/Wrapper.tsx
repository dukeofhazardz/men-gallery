import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full'>
            <div className='max-w-325 px-10 mx-auto max-lg:px-5 max-sm:px-3'>
                {children}
            </div>
        </div>
    )
}

export default Wrapper