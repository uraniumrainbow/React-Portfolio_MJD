import './contact.css'
import React from 'react'

const Contact = () => {
  return (
    <section className="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form action="" className="contactForm">
                <input type="text" className="name" required placeholder='Your Name'/>
                <input type="text" className="email" required placeholder='Your Email'/>
                <textarea className='msg' name="message" required rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact