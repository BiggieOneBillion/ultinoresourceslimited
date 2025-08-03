import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link,useNavigate } from 'react-router-dom'
import { useGlobal } from '../context/GlobalContext'

const ServiceCard = ({datum}) => {
  const {handleSetDigit} = useGlobal()
  const navigate = useNavigate()
  const handleWork = () => {
    handleSetDigit(datum.id)
    navigate('/services')
  }
  return (
    <div className='min-w-[300px] h-[35rem] flex flex-col items-center hover:object-scale-down transition-all'>

       <div className='h-[50%]  w-full overflow-hidden'>
          <img src={datum.img} alt="" className='h-[100%] w-[100%] object-cover hover:scale-105 transition-all ' />
       </div>

       <div className='h-[50%] pt-2 px-5 flex flex-col justify-between relative border'>
            <span className='absolute bg-primaryBlue p-3 text-[30px] text-white -top-[27px] right-5'>{datum.iconz}</span>
            <h1 className="card-title text-lg font-bold">{datum.title}</h1>
            <p className='card-description text-[rgba(0,0,0,0.5)] tracking-widest text-sm'>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque vitae eveniet repellendus architecto, sint suscipit repellat eligendi corrupti ex sequi amet aperiam quisquam numquam fugit reiciendis beatae hic minima. */}
                {datum.description}
            </p>
            <div className='flex justify-start mb-3'>
                <button onClick={handleWork} className='border-black border-b-2 pb-1 flex items-center gap-x-2 text-sm sm:text-base cursor-pointer'>Read More<HiArrowNarrowRight/></button>
            </div>
       </div>

    </div>
  )
}

export default ServiceCard