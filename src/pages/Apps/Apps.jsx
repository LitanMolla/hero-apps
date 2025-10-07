import React from 'react'
import Container from '../../components/Container/Container'

const Apps = () => {
  return (
    <>
      <div className="my-10 md:my-20">
        <Container>
          <h2 className='text-3xl md:text-5xl text-center font-bold'>Our All Applications</h2>
          <p className='text-gray-900/60 text-center mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
          <div className="flex justify-between items-center mt-10">
            <h4 className='text-xl font-medium'>(132) Apps Found</h4>
            <div className="max-w-[400px] w-full">
              <input className='border w-full outline-0 px-4 py-2 rounded-sm border-gray-300' type="search" placeholder='Search Apps' />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Apps