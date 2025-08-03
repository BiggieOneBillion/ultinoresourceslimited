import React from 'react'
import image1 from '../assets/WCU.jpg'
import { motion } from 'framer-motion'

const AboutWhoWeAre = () => {
  return (
    <div className='h-[35rem] bg-white' id='whoweare'>
       <motion.div 
       className=' h-[100%] flex flex-col justify-center gap-10 containers'
       initial={{x:100, opacity:0}}
       animate={{x:0, opacity:1}}
       transition={{duration:0.5}}
       >
         <motion.h1 
         className='text-[1.6em] md:text-[2em] font-extrabold w-[90%] md:w-[100%] mx-auto'
         >
          WHO WE ARE
          </motion.h1>
         <div className='h-[20rem]  relative bg-primaryBlue md:bg-white flex items-center justify-center lg:gap-x-10 '>
            <p className='px-3 py-4 border lg:border-none shadow-md lg:shadow-none text-[1.1em] relative z-50 bg-white w-[90%] md:h-[100%] md:w-[50%]'>Ultino Resources  Limited is a provider of Exploration & Production Solution, Power, Water and Process Technologies, Valve & Actuation, Measurement Solution, Automation (E&I) Solution, Digital Solution and Supply Chain Solution.</p>
            <div className='h-[100%] w-[50%] hidden md:block'>
               <img src={image1} alt=""  className='h-[100%] w-[100%] object-cover'/> 
            </div>
       </div>
       </motion.div>  
    </div>
  )
}

export default AboutWhoWeAre