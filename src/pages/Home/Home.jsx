import React from 'react'
import Hero from '../../components/Hero/Hero'
import Achievement from '../../components/Achievement/Achievement'
import TrendingApps from '../../components/TrendingApps/TrendingApps'
import useAppData from '../../hooks/useAppData'

const Home = () => {
  99
  const { pending } = useAppData();
  return (
    <>
      <Hero />
      <Achievement />
      <TrendingApps />
    </>
  )
}

export default Home