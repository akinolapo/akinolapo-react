import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>akinolapo@gmail.com</h5>
            <a href='mailto:akinolapo@gmail.com' target= "_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>akinolapo</h5>
            <a href='https://m.me/akinolapo.wp' target= "_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2347044581767</h5>
            <a href='https://api.whatsapp.com/send/?phone=2347044581767' target= "_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=''>
          <input type="text" name="name" placholder="Your Full Name" required></input>
          <input type="email" name="email" placeholder="Your Email"></input>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact