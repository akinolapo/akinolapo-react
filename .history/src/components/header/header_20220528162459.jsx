import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import HeaderSocials from './headersocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Peace Akinola</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={process.env.PUBLIC_URL+`assets/me.png`} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header