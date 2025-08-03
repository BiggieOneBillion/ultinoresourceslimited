import React from 'react'
import SectionTitle from '../components/SectionTitle'
import {DataImg} from '../data/HomeData'



const Partner = () => {
   
  return (
    <div className='py-20 md:h-[70vh] bg-white w-full mt-10 '>
      <div className="containers flex flex-col justify-center gap-6 w-full h-[100%]">

        <div className='pb-5 border-b-2 w-fit'>
         <SectionTitle title={'Our Partners'} name={'We Represent'}/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:h-[20vh]'>
            {
                DataImg.map((datumImg) => (
                    <div className='md:h-[20vh]' key={datumImg.id}>
                        <img src={datumImg.img} className='h-[100%] object-contain'/>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Partner