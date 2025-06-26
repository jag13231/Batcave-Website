import React from 'react'
import Homepage from "../Components/HompageFolder/Header"
import SrBanner from "../Components/HompageFolder/SrBanner"
import RbCard from "../Components/HompageFolder/RbCard"
import SrNews from '../Components/HompageFolder/SrNews'
import SocialMedia from "../Components/HompageFolder/JgSocialMedia"
import Footer from "../Components/HompageFolder/RbFooter"


const HomeScreen = () => {
  return (
    <>
    <Homepage />
    <SrBanner/>
    <RbCard />
    <SrNews/>
    <SocialMedia />
    <Footer />

    
    
    </>
  )
}

export default HomeScreen