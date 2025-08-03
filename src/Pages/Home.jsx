import React from 'react'
import {Carousel,SectionAbout,SectionService,WhyChooseUs,Partner, HeaderNav} from '../components/Index'


const Home = () => {
  return (
    <>
     <HeaderNav page={'Home'}/>
     <Carousel/>
     <SectionAbout/>
     <SectionService/>
     <WhyChooseUs />
     <Partner />
    </>
  )
}

export default Home