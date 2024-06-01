import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Products from './components/Products'
import Review from './components/Review'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Products />
      <Review />
      <Blogs /> 
      <Contact/>
       <Footer/> 
    </>
  )
}

export default App