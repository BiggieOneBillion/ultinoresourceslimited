import React from 'react'
import ContactForm from '../components/ContactForm'
import HeaderNav from '../components/HeaderNav'
import ServiceHero from '../components/ServiceHero'

const Contact = () => {
  return (
    <>
      <HeaderNav page={'Contact Us'}/>
      <ServiceHero title={'Contact Us'} section={'Contact Us'} />
      <ContactForm />
    </>
  )
}

export default Contact