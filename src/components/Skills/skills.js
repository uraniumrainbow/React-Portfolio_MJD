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
                <p>Welcome to the digital showcase of my passion and expertise in web development! I am a dedicated and versatile web developer committed to crafting seamless and visually appealing online experiences. With a strong foundation in front-end technologies such as HTML, CSS, and JavaScript, coupled with proficiency in popular frameworks like React and Vue.js, I bring ideas to life through interactive and responsive designs. </p>
                <div className='skillBars'>
                    <div className="skillBar">
                        <img src={UIDesign} alt="UI" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX design</h2>
                            <p>I have designed beautiful sample websites using React and Next</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={WebDesign} alt="Web" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Databases</h2>
                            <p>I am well-versed in both SQL & NoSql databases, including Mongo and Appwrite</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={AppDesign} alt="App" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Growth Mindset</h2>
                            <p>I am working on several more projects to demonstrate my constantly increasing skillset</p>
                        </div>
                    </div>
                </div>
   </section>
  )
}

export default Skills;
