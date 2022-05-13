import React from 'react'
import './review.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: process.env.PUBLIC_URL + `assets/avatar1.webp`,
    cname: 'Darius Cordell',
    comment: 'Peace was a pleasure to work with on this project. He was very attentive and patient. I am a fashion designer and very picky. He worked well with me and provided wonderful ideas. Even if he was not sure of something he spent the time to figure it out and make things work the way we wanted. I would highly recommend Peace for your website re-design projects.'
  },
  {
    avatar: process.env.PUBLIC_URL + `assets/avatar2.jpg`,
    cname: 'Ahmad Wajeeh',
    comment: 'Always available to help, incredibly proficient, hits deadlines without fail, hard-working and trustworthy. In my experience, no project is too much trouble, and with Peace, you really get a rare entity – someone that can simplify what can be a very complex. I can recommend his services without hesitation.'
  },
  {
    avatar: process.env.PUBLIC_URL + `assets/avatar3.jpg`,
    cname: 'Karan Suthar',
    comment: 'I am writing this letter to recommend Peace Akinola for the position of Front-end developer and WordPress website designer he is one of the best, creative and capable web developers . He has a fantastic eye for unique designs, and able to implement some of the best strategies.'
  },
  {
    avatar: process.env.PUBLIC_URL + `assets/avatar4.jpg`,
    cname: 'zahid sharif',
    comment: 'I have 11000 connection on Linkedin lot lof my friends making web site on WordPress but Peace Akinola is the best among rest, he is really know how to make a web site on WordPress, l recommended everyone who wants to make WordPress web site contact Peace Akinola and you will get 100 percent result. I love his work.'
  }
]

const review = () => {
  return (
    <section id='review'>
      <h5>Review from clients</h5>
      <h2>Job Feedbacks</h2>

      <Swiper className="container review__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({ avatar, cname, comment }, index) => {
            return (
              <SwiperSlide key={index} className='review'>
                <div className="client__avatar">
                  <img src={avatar} alt={cname} />
                </div>
                <h5 className='client__name'>{cname}</h5>
                <small className='client__review'>
                  {comment}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default review