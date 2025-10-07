import React from 'react'
import Container from '../Container/Container'
import AppCard from '../AppCard/AppCard'
import { Link } from 'react-router'

const TrendingApps = () => {
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <h2 className='text-3xl md:text-5xl text-center font-bold'>Trending Apps</h2>
                    <p className='text-gray-900/60 text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1].map(app => (
                                <AppCard />
                            ))
                        }
                    </div>
                    <div className="text-center">
                        <Link to='/apps' className='bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 px-7 py-3 rounded-sm text-gray-100 duration-300 hover:bg-gradient-to-l'>Show All</Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TrendingApps