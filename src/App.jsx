import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Review from './components/review/review'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Review/>
    <Contact/>
    </>
  )
}

export default App