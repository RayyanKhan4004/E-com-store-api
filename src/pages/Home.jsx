import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-gray-200' >
        <Navbar/>
        <LandingPage/>
        <Footer/>
    </div>
  )
}

export default Home