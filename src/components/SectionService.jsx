import React from 'react'
import SectionTitle from './SectionTitle'
import SwiperService from './SwiperService'

import {cardDetails} from '../data/HomeData'



const SectionService = () => {
   
  return (
    <div className='h-[55rem] w-full bg-[#f5f5f5] py-[100px] lato border '>
    <div className="containers flex flex-col gap-y-10">
        {/* TITLE- ABOUT US */}
        <SectionTitle name={'Our Services'} title={'What We Do'} />
        {/*CARD SECTION*/}
        <div className='gridr xl:grid-cols-3r gap-6 h-[35rem]'>
            <SwiperService data={cardDetails}/>
        </div>
    </div>
</div>
  )
}

export default SectionService