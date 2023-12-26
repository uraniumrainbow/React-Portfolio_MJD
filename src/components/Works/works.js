import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.jpg'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="workDesc">I am detail-oriented and have at least heard of JS</span>
        <div className="worksImgs">
            <a href='https://mjd-restaurant-a1fd09aebbf1.herokuapp.com/'><img src={Portfolio1} alt="" className="worksImg" /></a>
            <a href='https://lofty.up.railway.app/login'><img src={Portfolio3} alt="" className="worksImg" /></a>
        </div>
    </section>
  );
}

export default Works