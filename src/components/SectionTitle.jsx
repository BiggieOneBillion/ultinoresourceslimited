import React from 'react'
import iconx from '../assets/iconlogo.png'


const SectionTitle = ({name,title,color='black', weight='extrabold'}) => {
  return (
        <div className="title-AboutUs w-fit flex flex-col gap-0 relative ml-[2.5rem] md:ml-[4.2rem]">
            <div className='absolute -left-[1.7rem] sm:-left-[2.5rem]y sm:-left-[4.2rem] -top-5 -top-4r sm:-top-6 h-[60px] sm:h-[100px]'> 
                <img src={iconx} alt="" className='h-[100%]' />
            </div>
            <p className="question text-[16px] sm:text-[20px] font-light tracking-wide">{title}</p>
            <h1 className={`about text-[1.7em] sm:text-[2.5em] font-${weight} -mt-2 sm:-mt-3 text-${color}`}>
                {/* About Us */}
                {name}
            </h1>
        </div>
  )
}

export default SectionTitle