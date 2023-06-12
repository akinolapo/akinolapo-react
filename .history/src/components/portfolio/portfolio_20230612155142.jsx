import React from 'react'
import './portfolio.css'

// DATA ARRAY FOR PORTFOLIO DATA

const data =[
  {
  id: 5,
  image: process.env.PUBLIC_URL+`assets/portfolio1.png`,
  title: 'Peighton pryor raisey website',
  github: 'https://github.com/akinolapo',
  demo: 'https://p8on.net'
},
{
  id: 2,
  image: process.env.PUBLIC_URL+`assets/portfolio2.png`,
  title: 'Darius collection eCommerce Website',
  github: 'https://github.com/akinolapo',
  demo: 'https://www.dariuscordell.com'
},
{
  id: 3,
  image: process.env.PUBLIC_URL+`assets/portfolio3.png`,
  title: 'Blog App with React | GraphQL, NextJS, TailwindCSS',
  github: 'https://github.com/akinolapo/usefulhandles_blog',
  demo: 'https://wordpressvee.vercel.app'
},
{
  id: 4,
  image: process.env.PUBLIC_URL+`assets/portfolio4.png`,
  title: 'Blog writing on WordPress Help',
  github: 'https://github.com/akinolapo',
  demo: 'https://www.bookwebmaster.com'
},
{
  id: 5,
  image: process.env.PUBLIC_URL+`assets/portfolio5.png`,
  title: 'Weather Web App with JavaScript',
  github: 'https://github.com/akinolapo/cityWeatherApp',
  demo: 'https://weatherappforcities.netlify.app'
},
{
  id: 6,
  image: process.env.PUBLIC_URL+`assets/portfolio6.png`,
  title: 'Apple Music Player UI With HTML & CSS',
  github: 'https://github.com/akinolapo/ios-music-player',
  demo: 'https://ios-music-player.netlify.app/'
},
{
  id: 2,
  image: process.env.PUBLIC_URL+`assets/portfolio7.jpg`,
  title: 'Molebi AgroTech Hub Website with React.js & Tailwindcss',
  github: 'https://github.com/akinolapo/agric-tech',
  demo: 'https://molebi-agrotech-hub.pages.dev'
},
{
  id: 8,
  image: process.env.PUBLIC_URL+`assets/portfolio6.png`,
  title: 'Apple Music Player UI With HTML & CSS',
  github: 'https://github.com/akinolapo/ios-music-player',
  demo: 'https://ios-music-player.netlify.app/'
},
{
  id: 9,
  image: process.env.PUBLIC_URL+`assets/portfolio6.png`,
  title: 'Apple Music Player UI With HTML & CSS',
  github: 'https://github.com/akinolapo/ios-music-player',
  demo: 'https://ios-music-player.netlify.app/'
}
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, demo})=>{
           return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}></img>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} rel="noreferrer" target='_blank' className='btn'>Github</a>
            <a href={demo} rel="noreferrer" target='_blank' className='btn btn btn-primary'>Live Demo</a>
            </div>
          </article> 
           )
         })
       }     
      </div>
    </section>
  )
}

export default portfolio