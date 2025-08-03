import React from 'react'
import AboutCoreValue from '../components/AboutCoreValue'
import AboutOurMission from '../components/AboutOurMission'
import AboutWhoWeAre from '../components/AboutWhoWeAre'
import {AboutHeroSection, HeaderNav} from '../components/Index'

const AboutUs = () => {
  return (
    <>
     <HeaderNav page={'About Us'}/>

      <AboutHeroSection />
      <AboutWhoWeAre />
      <AboutOurMission />
      <AboutCoreValue />
    </>
  )
}

export default AboutUs