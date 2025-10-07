import React from 'react'
import Container from '../Container/Container'

const Achievement = () => {
    return (
        <>
            <div className="py-10 md:py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-gray-100">
                <Container>
                    <h2 className='text-3xl md:text-5xl text-center font-bold mb-5 md:mb-10'>Trusted by Millions, Built for You</h2>
                    <div className="flex justify-center md:justify-between flex-col md:flex-row gap-5">
                        <div className="text-center">
                            <p>Total Downloads</p>
                            <h2 className='text-4xl md:text-6xl font-extrabold my-2'>29.6M</h2>
                            <p>21% more than last month</p>
                        </div>
                        <div className="text-center">
                            <p>Total Reviews</p>
                            <h2 className='text-4xl md:text-6xl font-extrabold my-2'>906K</h2>
                            <p>46% more than last month</p>
                        </div>
                        <div className="text-center">
                            <p>Active Apps</p>
                            <h2 className='text-4xl md:text-6xl font-extrabold my-2'>132+</h2>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Achievement