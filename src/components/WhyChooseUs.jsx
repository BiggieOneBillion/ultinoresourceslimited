import React from 'react'
import {iconBadge} from '../data/HomeData'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
   
  return (
    <motion.div
     className=' h-[80rem]  lg:h-[100vh] whyChooseUs text-white lato '
     initial={{opacity:0.5 }}
     whileInView={{opacity:1}}
     transition={{duration:0.4}}
     viewport={{once:false, amount:0.1}}
    >
        <div className='h-[100%] containers flex flex-col items-center  pt-10 md:pt-20 lg:pt-0 lg:justify-center gap-10'>

        <div className="content flex flex-col gap-2 items-center lg:w-[40vw] ">
            <p className="content-p text-[1.05em] font-[300] ">Our Core Value</p>
            <p className='text-[40px] font-extrabold'>Why Choose Us</p>
            <p className="content-desc font-[300] text-[17px] text-center leading-[1.9]">Our mission is to deliver the best quality innovative and sustainable solutions across the energy value chain.</p>
        </div>

        <div className='grid grid-cols-1 gap-5 lg:grid-cols-4 h-[30vh] w-full  lg:last:border-dashed last:border-b-0 qualities'>
            {
                iconBadge.map((badge,index)=> (
                    <div key={badge.id} className='border-b pb-5 md:pb-10 sm:pb-0 lg:border-r lg:border-b-0 border-dashed flex flex-col gap-4 justify-center items-center '>
                        <div className='flex justify-center items-center w-[150px] rounded-[100%] bg-[rgba(255,255,255,0.1)] h-[150px]  '>
                            <span className='flex justify-center items-center h-[100px] w-[100px] rounded-[100%] bg-primaryBlue text-[60px]'>
                                {badge.badge}
                            </span>
                        </div>
                        <div>
                           <p className='text-[1.2em]'>{index + 1}. {badge.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    </motion.div>
  )
}

export default WhyChooseUs