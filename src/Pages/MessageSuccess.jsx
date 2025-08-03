import React from 'react'
import HeaderNav from '../components/HeaderNav'
import ServiceHero from '../components/ServiceHero'
import { SuccessFormSubmit } from '../components/SuccessFormSubmit'

const MessageSuccess = () => {
  return (
    <>
    <HeaderNav page={'Contact Us'}/>
    {/* <ServiceHero title={'Contact Us'} section={'Contact Us'} /> */}
    <SuccessFormSubmit/>
    </>
  )
}

export default MessageSuccess