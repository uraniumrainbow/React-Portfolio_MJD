import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
               <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Home</Link>
               <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">About</Link>
               <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Portfolio</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Contact Me</Link>
            </div>
            <button className='desktopMenuBtn'>
                
            </button>
        </nav>
    )
}

export default Navbar;