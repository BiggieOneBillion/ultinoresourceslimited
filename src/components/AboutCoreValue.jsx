import React from 'react'
import { motion } from 'framer-motion'
import {iconBadge} from '../data/AboutPageData'

const AboutCoreValue = () => {



  return (
    <div className='h-fit py-20 lg:h-[38rem] bg-white' id='values'>
        <motion.div 
        className="containers flex flex-col justify-center h-[100%] gap-y-10"
        initial={{y:-10, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.3}}
        viewport={{once:false, amount:0.2}}
        >
           <div className="title">
             <h1 className='lg:text-[2em] text-center md:text-left font-semibold lg:font-extrabold text-[1.6em] text-black'>OUR CORE VALUES</h1>
           </div>
           <motion.div 
           className="values grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-10 lg:h-[16rem] md:grid-cols-2 md:gap-10 "

           >
            {
                iconBadge.map((icb,i)=>(
                    <motion.div 
                    className='flex flex-col items-center gap-y-3 md:justify-between lg:justify-start lg:gap-y-3 lg:h-[100%]' key={icb.id}
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:false, amount:0.1}}
                    transition={{duration:0.2*i}}

                    >
                       <span className='text-[60px]'>{icb.badge}</span>
                       <p className='text-xl font-bold text-center uppercase '>{icb.title}</p>
                       <p className='text-justify text-[0.9em] font-medium'>{icb.description}</p>
                    </motion.div>
                ))
            }
           </motion.div>
        </motion.div>
    </div>
  )
}

export default AboutCoreValue