import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const headersocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/akinolapo' target= "new"><BsLinkedin/></a>
      <a href='https://github.com/akinolapo' target= "new"><FaGithubAlt/></a>
      <a href='https://twitter.com/poakinola' target= "new"><FiDribbble/></a>
    </div>
  )
}

export default headersocials