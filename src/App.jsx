import React from 'react'
import AnoucementBar from './components/annoucement bar/AnoucementBar'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection'
import Website_MainPage from './pages/Website_MainPage'
import Website_Category_Page from './pages/Website_Category_Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product_Details_Page from './pages/Product_Details_Page'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Website_MainPage/>} />
        <Route path='/category' element={<Website_Category_Page/>} />
        <Route path='/productDetails/:id' element={<Product_Details_Page/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
