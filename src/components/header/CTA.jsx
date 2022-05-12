import React from 'react'
// import Resume from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {process.env.PUBLIC_URL+`assets/cv.pdf`} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA