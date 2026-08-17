import React from 'react'
import AnoucementBar from '../components/annoucement bar/AnoucementBar'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Product_Details from '../components/Product Detail/Product_Details'
import Product_Customer_Review from '../components/Product_Review/Product_Customer_Review'

function Product_Details_Page() {
  return (
    <div>
      <AnoucementBar/>
      <Navbar/>
      <Product_Details/>
      <Product_Customer_Review/>
      <Footer/>
    </div>
  )
}

export default Product_Details_Page
