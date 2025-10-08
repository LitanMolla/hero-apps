import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import { ToastContainer } from 'react-toastify'

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className='flex-1'>
          {<Outlet />}
        </main>
        <Footer />
        <ToastContainer
          theme='dark'
        />
      </div>
    </>
  )
}

export default Root