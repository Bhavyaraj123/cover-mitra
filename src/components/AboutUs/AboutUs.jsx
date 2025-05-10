import React from 'react'
import AboutHero from '../pages/AboutUsPaged/AboutHero'
import MissionVision from '../pages/AboutUsPaged/MissionVission'
import AnimatedNumbers from '../pages/AboutUsPaged/AnimatedNumbers'
import WhyChooseUs from '../pages/AboutUsPaged/WhyChooseUs'
import ContactInfo from '../pages/AboutUsPaged/ContactInfo'
const AboutUs = () => {
  return (
    <div>
        <AboutHero/>
        <MissionVision/>
        <AnimatedNumbers/>
        <WhyChooseUs/>
        <ContactInfo/>
    </div>
  )
}

export default AboutUs