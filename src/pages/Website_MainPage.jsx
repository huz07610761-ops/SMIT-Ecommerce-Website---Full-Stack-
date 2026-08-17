import React from 'react'
import AnoucementBar from '../components/annoucement bar/AnoucementBar'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import Trusted from '../components/trusted_Company/Trusted'
import NewArrivals from '../components/new arrivals/NewArrivals'
import Top_Selling_Product from '../components/top salling/Top_Selling_Product'
import BrowseByDressStyle from '../components/BrowseByDressStyle/BrowseByDressStyle'
import TestimonialsSlider from '../components/customer review/Customer_Review'
import Footer from '../components/footer/Footer'

function Website_MainPage() {
  return (
    <div>
      <AnoucementBar/>
      <Navbar/>
      <HeroSection/>
      <Trusted/>    
      <NewArrivals/>
      <Top_Selling_Product/>
      <BrowseByDressStyle/>
      <TestimonialsSlider/>
      <Footer/>
    </div>
  )
}

export default Website_MainPage
