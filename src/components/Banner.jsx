import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail,MdLocationOn} from 'react-icons/md'

const Banner = () => {
  return (
    <div className='banner bg-[#0b2545] h-[5vh] w-full hidden lg:flex items-center'>
        <div className='containers flex items-center gap-x-10 text-white'>
          <span className='font-[450] text-[14px] italic flex items-center gap-x-1'><BsTelephoneFill/>+2348097240528</span>
          <span className='font-[450] text-[14px] italic flex items-center gap-x-1'><MdEmail/>support@ultinoresources.com</span>
          <span className='font-[450] text-[14px] italic ml-auto flex items-center gap-x-1'><MdLocationOn/>3/5 Bishop Dimeari Street, GRA, Port Harcourt</span>
        </div>
    </div>
  )
}

export default Banner