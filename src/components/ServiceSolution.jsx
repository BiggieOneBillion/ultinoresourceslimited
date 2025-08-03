import React,{useEffect} from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import { motion } from 'framer-motion'
import { GiGears, GiSandsOfTime } from 'react-icons/gi'
import { useState } from 'react'
import { useGlobal } from '../context/GlobalContext'
import { Link } from 'react-router-dom'
import {tabData,services_data} from '../data/ServicesPageData'
 
const ServiceSolution = () => {

    const {digits} = useGlobal()

    const [digit, setDigit] = useState(0)


    const updateDigit = () => {
         const tabz  = document.getElementsByClassName('zzz')
         let currentz = document.querySelectorAll('.moment')
         if(currentz.length > 0) {
            currentz[0].classList.remove('moment')
            Array.from(tabz)[digits].classList.add('moment')
         } 
      }


   const handleCleanUp = () => {
      setDigit(digits)
      updateDigit()
   }




   useEffect(()=>{

      digits ? handleCleanUp() : null

   },[digits])

   const service_data_style = 'flex justify-between items-center px-3 text-sm md:text-[1.1em] lg:text-[1.3em] font-medium relative zzz cursor-pointer'

  return (
    <div className='h-fit md:h-[50rem] lg:h-[130vh] xl:h-[150vh] py-[5rem] xl:py-[3rem]' id='service_solutions'>
       <div className='h-[100%] containers flex flex-col gap-y-2t md:grid md:grid-col-1 md:grid-cols-3 md:grid-rows-4 xl:grid-rows-5 md:gap-10 gap-y-5 ' id='services_service'>

          <div className='md:col-span-1 md:row-span-2 md:grid  md:grid-cols-1 md:grid-rows-7 md:gap-y-5 tab-contain flex w-[100%] border md:border-none order-1 xl:row-span-3'>
               {
                  services_data.map((datum,i)=>(
                     <p 
                     className={`${service_data_style} ${!digits ? digit === i && 'moment' : digits === i && 'moment'}`}
                     id={datum.id}
                     onClick={()=> setDigit(i)}
                     >{datum.title}<MdOutlineArrowForwardIos/></p>
                  ))
               }
             
          </div>

          {/*  */}
          <div className='bg-blue-5004 col-span-2 row-span-3 flex flex-col gap-5 order-2 xl:row-span-5 overflow-scrollr'>
            <div className='h-[50%] xl:h-[40%]'>
             <img src={tabData[digit].img} alt="" className='h-[100%] w-[100%] object-cover'/>
            </div>
            <div className='flex-1 overflow-scroll'>
             <div className='font-medium text-[#3e3e3e] text-[0.9em] h-[50vh]t overflow-scrolly'>
                {tabData[digit].description}
            </div>
            </div>
          </div>

          {/*  */}
          <div className='order-4 md:order-3 md:col-span-1 md:row-span-2 background2 '>
             <div className='containers flex flex-col justify-between py-3 lg:pt-1 lg:pb-3 md:py-4  text-white h-[15rem] md:h-[100%]'>
               <h1 className='text-[1.7em] md:text-[1.5em] lg:text-[1.8em] font-semibold flex flex-col text-white'>
                <span>
                   Need More
                </span>
                <span className='-mt-2 text-[#8da9c4]'>
                 Information?
                </span>
              </h1>
              <p className='text-sm'>For more information on our services, kindly click below to fill the information request form.</p>
              <Link to={'/contact'} className='w-fit py-2 px-3 animate-bounce bg-[#8da9c4]'>Contact Us</Link>
             </div>
          </div>
          {/*  */}

          <div className=' order-3 md:order-4 md:col-span-2 md:row-span-1 flex flex-col gap-y-10 md:gap-y-2 md:hidden'>
             <h1 className='lg:text-[1.8em] font-semibold flex flex-col text-black relative w-fit before:absolute before:w-[50%] before:h-[3px] before:bg-[#8da9c4] before:-bottom-2 md:before:bottom-0'> Our Solution</h1>

             <div className='flex-1  flex flex-col gap-y-10 md:gap-y-0 md:grid md:grid-cols-2 md:gap-x-3'>
                 <div className=' flex gap-x-2'>
                    <span className='w-[20%] flex justify-center items-center'>
                       <GiGears className='text-[4em] md:text-[6em] lg:text-[5em]'/>
                    </span>
                    <div className='flex-1 flex flex-col gap-y-2'>
                       <h1 className='lg:text-[1.3em] lg:font-normal font-semibold'>Quality Solution</h1>
                       <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint ex,</p>
                    </div>
                 </div>

                 <div className=' flex gap-x-2'>
                    <span className='w-[20%] flex justify-center items-center'>
                       <GiSandsOfTime className='text-[4em] md:text-[6em] lg:text-[5em]'/>
                    </span>
                    <div className='flex-1 flex flex-col gap-y-2'>
                       <h1 className='lg:text-[1.3em] lg:font-normal font-semibold'>Delivery On Time</h1>
                       <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint ex,</p>
                    </div>
                 </div>
             </div>
          </div>

       </div>
    </div>
  )
}

export default ServiceSolution


// removed code
   //  useEffect(()=>{ 
   //      const tabContainer  = document.querySelector('.tab-contain')
   //      const tabs  = tabContainer.getElementsByClassName('zzz')
      
   //    //   digits ? Array.from(tabs)[digits].classList.add('moment') : null
   //    //   document.getElementById('ttt').focus()
   //    //   digits ? window.location.hash = `#${focusId[digits]}` : null
   //      digits ? window.location.hash = `#service_solutions` : null


   //      Array.from(tabs).forEach((tab) => {
   //         tab.addEventListener('click', ()=>{
   //          let current = document.querySelectorAll('.moment')
   //          if (current.length > 0) {
   //              current[0].classList.remove('moment')
   //             //  console.log(current[0]);
   //              tab.classList.add('moment')
   //          } else {
   //              tab.classList.add('moment')
   //          }
          
   //          // console.log(tab);
   //         })
   //      })
   //    },[])
   //  const focusId = ['first','second', 'third', 'forth','fifth','sixth','seventh']



