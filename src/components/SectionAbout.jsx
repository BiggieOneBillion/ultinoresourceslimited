import React from 'react'
import AboutUs from '../assets/AboutImg.jpg'
import {HiArrowNarrowRight} from 'react-icons/hi'
import SectionTitle from './SectionTitle'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SectionAbout = () => {
  return (
    <div className='h-[41rem] md:h-[45rem] w-full mb-[100px]'>

    <motion.div className='h-[100%] w-full bg-white py-[100px] lato'
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}} 
      transition={{duration:0.5}}
      viewport={{once:false, amount:0.5}}
    >
        <div className="containers flex flex-col gap-y-5">
            {/* TITLE- ABOUT US */}
            <SectionTitle name={'About Us'}  title={'Who We Are'}/>
            {/*IMAGE-IMAGE*/}
            <div className='h-[27rem] w-[80vw] sm:w-[40vw]  sm:ml-24 relative'>
                {/* FLOATING DIV */}
                <div className='absolute h-[100%] w-[100%] bg-white top-10 ml-[10%] md:ml-[60%] border shadow-lg pt-[10%] pb-[5%]'>
                   <div className='h-[100%] w-[80%] mx-auto  flex flex-col gap-y-5'>
                     <h1 className='text-[1.5rem] md:text-[2.3rem] font-extrabold raleway'>ULTINO <span className='text-[#ff5e15]'>RESOURCES</span></h1>
                     <p className='border-t-2 border-b-2 flex-1 pt-3 '>
                     Ultino Resources  Limited is a provider of Exploration & Production Solution, Power, Water and Process Technologies, Valve & Actuation, Measurement Solution, Automation (E&I) Solution, Digital Solution and Supply Chain Solution.
                     </p>
                     <div className='flex justify-end'>
                        <Link to={'/about'} className='border-black border-b-2 pb-1 flex items-center gap-x-2'>Read More<HiArrowNarrowRight/></Link>
                     </div>
                   </div>
                </div>
                <img src={AboutUs} alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default SectionAbout