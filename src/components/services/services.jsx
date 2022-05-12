import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in creating online content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>100% original and unique content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Keyword-optimized content for SEO.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Quick turnaround.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Industry best pricing.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

        <article className='service'>
          <div className="service__head">
            <h3>Website Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom designed & developed WordPress websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive mobile-optimized layouts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Easy-to-manage WordPress CMS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>eCommerce Website Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Search Engine Optimization (SEO).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Maintenance.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBSITE DEVELOPMENT*/}

        <article className='service'>
          <div className="service__head">
            <h3>Technical Support</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>End-to-end customer support.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing & evaluating new technologies.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software support services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Computer assembling & installing programs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>IT Training.</p>
            </li>
          </ul>
        </article>
        {/* END OF TECHNICAL SUPPORT */}
      </div>
    </section>
  )
}

export default services