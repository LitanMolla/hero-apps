import React from 'react'
import Hero from '../../components/Hero/Hero'
import Achievement from '../../components/Achievement/Achievement'
import TrendingApps from '../../components/TrendingApps/TrendingApps'
import useAppData from '../../hooks/useAppData'
import Spinner from '../../components/Spinner/Spinner'

const Home = () => {99
  const { pending } = useAppData();
  return (
    <>
      {
        pending
          ?
          <Spinner />
          : <>
            <Hero />
            <Achievement />
            <TrendingApps />
          </>}
    </>
  )
}

export default Home