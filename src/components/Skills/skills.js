import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

export const Skills = () => {
    return (
        <section id="skills" className='skillBars'>
            <span className="skillTitle"></span>
                <h1>What I Do</h1>
            <span className="skillDesc"></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='skillBars'>
                    <div className="skillBar">
                        <img src={UIDesign} alt="UI" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={WebDesign} alt="Web" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Website Design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={AppDesign} alt="App" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>App Design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        </div>
                    </div>
                </div>
   </section>
  )
}

export default Skills;
