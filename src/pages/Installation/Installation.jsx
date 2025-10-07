import React from 'react'
import Container from '../../components/Container/Container'
import InstalledCard from '../../components/InstalledCard/InstalledCard'

const Installation = () => {
  return (
    <>
      <div className="my-10 md:my-20">
        <Container>
          <h2 className='text-3xl md:text-5xl text-center font-bold'>Your Installed Apps</h2>
          <p className='text-gray-900/60 text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>
          <div className="flex justify-between items-center my-10">
            <h4 className='text-xl font-medium'>1 Apps Found</h4>
            <select className='border outline-0 px-4 py-2 rounded-sm border-gray-300 bg-white'>
              <option value="">Sort By Size</option>
              <option value="">Low to high</option>
              <option value="">High to low</option>
            </select>
          </div>
          <div className="space-y-5">
            {[1,1,1].map(app=>(
              <InstalledCard/>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Installation