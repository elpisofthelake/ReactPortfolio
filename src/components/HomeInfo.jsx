import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl sm:text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-12 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, My Name is <span className='font-semihold'>Sachin Acharya </span>😊
        </h1>
    ), 
    2: (
        <InfoBox 
            text="What do you want to now about me?"
            link="/about"
            btnText="Learn More"
        />
    ), 
    3: (
        <InfoBox 
            text="Check out my projects"
            link="/projects"
            btnText="Learn More"
        />
    ), 
    4: (
        <InfoBox 
            text="Contact Me"
            link="/contact"
            btnText="Number"
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo