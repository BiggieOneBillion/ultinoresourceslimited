import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const SuccessFormSubmit = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
           navigate('/')
        }, 5000)
    })
  return (
    <div className='w-[100vw] h-[100vh] bgs-[rgba(0,0,0,0.5)] flex justify-center items-center'>
        <div className='bg-white rounded-md flex flex-col justify-center items-center h-[200px] lg:w-[500px] w-[90%] md:w-[300px]'>
            <h2 className='md:font-extrabold font-semibold text-[20px] md:text-[25px] lg:text-[40px] uppercase text-primaryBlue'>Message Sent!!!</h2>
            <p className='capitalize text-sm font-medium'>Our team will get back to you shortly</p>
        </div>
    </div>
  )
}
