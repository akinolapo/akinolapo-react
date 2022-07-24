import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaPinterestP}

const footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Akinolapo</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#review'>Reviews</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer__socials">
        <a href='https://facebook.com/akinolapo.wp' target= "_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href='https://instagram.com/akinolapo' target= "_blank" rel="noreferrer"><FiInstagram/></a>
        <a href='https://twitter.com/poakinola' target= "_blank" rel="noreferrer"><IoLogoTwitter/></a>
        <a href='https://www.pinterest.com/akinolapo' target= "_blank" rel="noreferrer"><FaPinterestP/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Akinolapo. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default footer