import React from 'react'
import errorImg from '../../assets/error-404.png'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import { Link } from 'react-router'
const NotFound = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex justify-center items-center my-10 md:my-20">
          <div className="text-center space-y-3">
            <img className='w-full mx-auto' src={errorImg} alt="Error img" />
            <h4 className='text-3xl font-semibold'>Oops, page not found!</h4>
            <p className='text-gray-900/60'>The page you are looking for is not available.</p>
            <Link to='/' className='text-gray-100 bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 rounded-md inline-block duration-300 hover:bg-gradient-to-l'>Go Back!</Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default NotFound