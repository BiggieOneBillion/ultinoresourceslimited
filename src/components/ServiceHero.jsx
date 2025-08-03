import React from 'react'
import { motion } from 'framer-motion'

const ServiceHero = ({section, title}) => {
  return (
    <div className=' h-[15rem] md:h-[20rem] lg:h-[30rem] background3 w-full'>
       <motion.div 
       className='containers flex flex-col justify-center items-center gap-2 h-[100%]'
       initial={{opacity:0, x:100}}
       animate={{opacity:1, x:0}}
       transition={{duration:0.5, staggerChildren:1}}
       >
           <motion.h1 
           className=' lg:text-[1.5em] text-[#ff5e15] font-semibold uppercase'
          //  initial={{opacity:0, x:50}}
          //  animate={{opacity:1, x:0}}
          //  transistion={{duration:1}}
           
           >
            Home / {section}
           </motion.h1>
           <motion.h1 
           className='text-[2em] md:text-[3em] lg:text-[4em] font-extrabold text-white tracking-wide uppercase'
           initial={{opacity:0, x:100}}
           animate={{opacity:1, x:0}}
          //  transistion={{duration:2}}
           >
            {title}
           </motion.h1>
       </motion.div>
    </div>
  )
}

export default ServiceHero