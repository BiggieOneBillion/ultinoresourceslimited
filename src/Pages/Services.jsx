import React from 'react'
import HeaderNav from '../components/HeaderNav'
import ServiceHero from '../components/ServiceHero'
import ServiceSolution from '../components/ServiceSolution'

const Services = () => {
  return (
    <>
      <HeaderNav page={'Services'}/>
      <ServiceHero section={'Service'} title={'Our Service'}/>
      <ServiceSolution/>
    </>
  )
}

export default Services