import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import HomeContainer from '../../Components/HomeContainer/HomeContainer'
import './Home.css';
function Home() {
  return (
    <div>
      <Navbar />
     <HomeContainer />
      <Footer />
      </div>
  )
}

export default Home