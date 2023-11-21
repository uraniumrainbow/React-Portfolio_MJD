import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnPic from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hey there!</span>
            <span className="introText">I'm <span className="introName">Maximillian</span> <br/>Web Developer</span>
            <p className="introParagraph">I have a deep and abiding passion for React-based web development.</p>
            <Link><button className="btn"><img src={btnPic} alt="Hire Me" className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro