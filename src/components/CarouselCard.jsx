import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const CarouselCard = ({datum}) => {
    const {classN, title, description} = datum
  return (
    <div className={`h-[100%] w-[100%] flex items-center flex-col gap-10 justify-center ${classN} text-white lato`}>
        <motion.h1 
        className="title font-bold tracking-widest leading-[40px] text-[30px] w-[90%] xl:w-[40%] text-center capitalize"
        initial={{x:50, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1, delay:0.1,}}
        >
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolorum. */}
          {title}
        </motion.h1>
        <motion.p className="description font-medium tracking-widest text-[16px] w-[90%] xl:w-[50%] text-center"
         initial={{x:50, opacity:0}}
         animate={{x:0, opacity:1}}
         transition={{duration:1.2, delay:0.1,}}
        >
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis cum ipsum eius distinctio aspernatur harum tempora qui quo quasi. */}
          {description}
        </motion.p>
        <div className='flex gap-10'>
            <motion.button 
            className='px-3 py-2 rounded-2xl text-white bg-[#8da9c4]  hover:bg-[rgba(141,169,196,0.9)] transition'
            // whileHover={{scale:1.05}}
            >
              <Link to={'/about'}>
               Read More
              </Link>
            </motion.button>
            <motion.button 
            className='px-3 py-2 rounded-2xl text-white bg-transparent border border-white hover:text-primaryBlue hover:bg-white transition'
            >
             <Link to={'/contact'}>
               Contact Us
              </Link>
            </motion.button>
        </div>
    </div>
  )
}

export default CarouselCard