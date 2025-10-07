import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className='flex-1'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default Root