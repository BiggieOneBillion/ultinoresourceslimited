import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitlecopy from './SectionTitlecopy'
import {motion} from 'framer-motion'

const AboutHeroSection = () => {
  return (
    <div className='aboutSectionbg background1 h-[30rem] pt-20'>
        <motion.div 
        className='containers  lg:h-[100%] flex flex-col  justify-center gap-8 md:gap-10'
        initial={{x:-50, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.5,staggerChildren:1}}

        >
           <SectionTitlecopy name={'About Us'} />
           <motion.div 
           className='flex flex-col gap-6'
           initial={{x:-50, opacity:0}}
           animate={{x:0, opacity:1}}
           transition={{duration:1}}
           >
            <h1 className='text-[2.5rem] ml-2 font-semibold text-white uppercase'>Ultino <span className='text-[#ff5e15]'>Resources</span></h1>
            <motion.div 
            className='flex gap-4 '
            initial={{x:-10, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5}}
            >
                <Link to={'/contact'} className='px-3 py-2 text-white border rounded-3xl bg-[#8da9c4] font-medium '>Contact Us</Link>
                <Link  to={'/getaquote'} className='px-3 py-2 text-white border rounded-3xl font-medium'>Get A Quote</Link>
            </motion.div>
           </motion.div>
        </motion.div>

    </div>
  )
}

export default AboutHeroSection