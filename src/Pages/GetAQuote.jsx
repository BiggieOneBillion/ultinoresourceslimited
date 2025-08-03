import React from 'react'
import HeaderNav from '../components/HeaderNav'
import QuoteForm from '../components/QuoteForm'
import ServiceHero from '../components/ServiceHero'

const GetAQuote = () => {
  return (
    <div>
        <HeaderNav page={null}/>
        <ServiceHero title={'Get a Quote'} section={'Quote'}/>
        <QuoteForm />
    </div>
  )
}

export default GetAQuote