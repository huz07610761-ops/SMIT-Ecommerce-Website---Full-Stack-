import React from 'react'
import AnoucementBar from '../components/annoucement bar/AnoucementBar'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import Trusted from '../components/trusted_Company/Trusted'

function Website_MainPage() {
  return (
    <div>
      <AnoucementBar/>
      <Navbar/>
      <HeroSection/>
      <Trusted/>    
    </div>
  )
}

export default Website_MainPage
