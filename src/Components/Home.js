import React from 'react'
import Navbar from './Navbar'
// import Product from './Product'
import "../CSS/Home.css"
import Catalog from './Catalog'
import Intro from "../Components/Intro"
import BookDetail from './BookDetail'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Intro/>
    {/* <Catalog/> */}
    <BookDetail/>
    </>
  )
}

export default Home