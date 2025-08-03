import React,{useRef} from 'react'
import TextInput from './TextInput'
import { useForm, ValidationError } from '@formspree/react'
import { useNavigate } from 'react-router-dom'


const QuoteForm = () => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailQuoteRef = useRef()
    const phoneNumRef = useRef()
    const companyRef = useRef()
    const OverviewRef = useRef()
    const budgetRef = useRef()
    const startRef = useRef()

    const [state, handleSubmit] = useForm("xpznvjde")

    const navigate = useNavigate()

    if(state.succeeded){
         return navigate('/success')
    }

  return (
    <div className='lg:h-[70rem]y h-fit w-full bg-[#f5f5f5] py-20'>
      <form 
      className='containers h-[100%] bg-white p-[1.5rem] md:p-[4rem] lg:p-[6rem]' 
      onSubmit={handleSubmit} 

      >
         <div className='h-[100%] flex flex-col gap-y-5'>
            <div className='mt-5 border-b border-black'>
                <p className='text-lg font-semibold'>CONTACT INFORMATION</p>
            </div>
            <div className='grid gap-y-5 md:grid-cols-2 md:gap-x-3 '>
                <TextInput field='text' name='firstname' label={'First Name:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your first name'} placeholder='Enter your first name' title='Enter your first name' ref={firstNameRef}/>
                <TextInput field='text' name='lastname' label={'Last Name:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your last name'} placeholder='Enter your last name' title='Enter your last name' ref={lastNameRef}/>
            </div>
            <div className='grid gap-y-5 md:grid-cols-2 md:gap-x-3 '>
                <TextInput field='email' name='Email' label={'Email:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your email address'} placeholder='Enter your email address' title='Enter your email address'  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" ref={emailQuoteRef}/>
                <TextInput field='number' name='phoneNumber' label={'Phone Number:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your phone number'} placeholder='Enter your phone number' title='Enter your phone number' ref={phoneNumRef}/>
            </div>
            <div>
             <TextInput field='text' name='company' label={'company:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your company name'} placeholder='Enter your company name' title='Enter your company name' ref={companyRef}/>
            </div>
            <div className='mt-5 border-b border-black'>
                <p className='text-lg font-semibold'>PROJECT INFORMATION</p>
            </div>
            <div>
                <p className='font-semibold text-[1rem] capitalize mb-2 w-fit'>Quick Overview Of Your Project</p>
                <textarea name="message" id="" cols="30" rows="10" className='w-full border-2 p-2' placeholder='Leave a message....' required title='Please enter your message' ref={OverviewRef}></textarea>
                <span className='text-[12px] text-red-500 font-normal mt-2 capitalize hidden'>Please write a quick overview</span>  
            </div>
            <div className='grid gap-y-5 md:grid-cols-1 lg:grid-cols-2 md:gap-x-3 '>
                <TextInput field='number' name='budget' label={'Do you have a budget in mind?'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your budget'} title='Enter your budget' ref={budgetRef}/>
                <TextInput field='date' name='timeToStart' label={'How soon are you ready to start?'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please fill in this field'}  title='Please fill in this field' ref={startRef}/>
            </div>
            <div>
                <button 
                className='bg-primaryBlue px-7 py-2 md:py-4 md:text-[1.1rem] font-semibold text-white w-full md:w-fit'
                type='submit'
                >
                    Send Message
                </button>
            </div>
         </div>
      </form>
    </div>
  )
}

export default QuoteForm