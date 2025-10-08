import React from 'react'
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router'
const AppNotFound = () => {
  return (
    <>
        <div className="text-center space-y-5 my-10">
            <div className="max-w-md w-full mx-auto">
                <img className='w-full' src={appError} alt="Error app" />
            </div>
            <h4 className='text-3xl md:text-4xl font-bold'>OPPS!! APP NOT FOUND</h4>
            <p className='text-gray-900/60'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to='/' className='text-gray-100 bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 rounded-md inline-block duration-300 hover:bg-gradient-to-l'>Go Back!</Link>
        </div>
    </>
  )
}

export default AppNotFound