import React, {useRef,useState} from 'react'
// import { MdOutlineEmail } from 'react-icons/md'
import { VscCallIncoming } from 'react-icons/vsc'
import {SlLocationPin} from 'react-icons/sl'
import TextInput from './TextInput'
import { AiOutlineMail } from 'react-icons/ai'
// import {schema} from '../Validation/contactinfo'
import { useForm, ValidationError } from '@formspree/react'
// import { useEffect } from 'react'
// import { useCallback } from 'react'
import { useGlobal } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {
   const fullNameRef = useRef()
   const EmailRef = useRef()
   const SubjectRef = useRef()
   const MessageRef = useRef()

   const {handleAllow} = useGlobal()
   const navigate = useNavigate()

   const [state, handleSubmit] = useForm("xpznvjde")
   
//    const [showDelivered, setShowDelivered] = useState(false)

//    const handleDeliveredMessage = () => {
//       setShowDelivered(true)
//       setTimeout(() => {
//         setShowDelivered(false)
//       }, 6000);
//    }

//    const control  = useCallback(()=>{
//        if(state.succeeded){
//         handleDeliveredMessage()
//        }
//    },[state.succeeded])

//    control()

   
//    useEffect(()=>{
//        state.succeeded && handleDeliveredMessage()
      
//    },[state.succeeded])


   if(state.succeeded) {
    //  handleAllow()
     return navigate('/success')
    // return alert('sent!!')
   }

//    const config2 = {
//     // SecureToken:'4df9bc2c-7e3d-45f8-b1a5-5f514d59591d',
//     Username:'rchukwu94@gmail.com',
//     Password:'9E63D1A24C32E0999E37754F8444B8413F0C',
//     Host:'smtp.elasticemail.com',
//     Port:2525,
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
//    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     if(fullNameRef.current.value === '' ){
    //       return   fullNameRef.current.focus()
    //     } else if (EmailRef.current.value === ''){
    //         return EmailRef.current.focus()
    //     } else if(SubjectRef.current.value === ''){
    //         return  SubjectRef.current.focus()
    //     } else if(MessageRef.current.value === ''){
    //         return  MessageRef.current.focus()
    //     }

    //     let message = {
    //         fullname: fullNameRef.current.value,
    //         Email: EmailRef.current.value,
    //         Subject: SubjectRef.current.value,
    //         Message: MessageRef.current.value,
    //     }

    //     const config = {
    //         SecureToken:'4df9bc2c-7e3d-45f8-b1a5-5f514d59591d',
    //         To : 'chuksmanray94@gmail.com',
    //         From : message.Email,
    //         Subject : "This is from my contact form",
    //         Body :`This message is from ${message.fullname}. ${message.Message}`
    //        }

    //        const config2 = {
    //         // SecureToken:'4df9bc2c-7e3d-45f8-b1a5-5f514d59591d',
    //         Username:'rchukwu94@gmail.com',
    //         Password:'9E63D1A24C32E0999E37754F8444B8413F0C',
    //         Host:'smtp.elasticemail.com',
    //         Port:2525,
    //         To : 'rchukwu94@gmail.com',
    //         From : message.Email,
    //         Subject : "This is from my contact form",
    //         Body :`This message is from ${message.fullname}. ${message.Message}`
    //        }

    //        console.log(message.Email);

    //     if (window.Email) {
    //         window.Email.send(config2).then(()=> alert('Email sent successful'))
    //     }

    //       console.log(message);
    // }

    

  return (
    <div className=' md:h-[70rem] lg:h-[60rem] bg-[#f5f5f5] '>
       <div className='containers flex flex-col gap-y-5 lg:gap-y-10 h-[100%]'>

           {/* CONTACT US CARD */}
            <div className='h-[337.65px] md:h-[30%] mt-10 lg:h-[20%]  lg:grid-cols-3 lg:gap-x-5 lg:pt-10 grid gap-y-3 md:grid-cols-1 grid-rows-4 md:mt-10  lg:w-full bg-white lg:bg-inherit pb-5' id='contact_info'>
                  <h1 className='px-5 text-[1.2em] md:text-[1.5em] font-semibold pt-3 lg:hidden flex items-center'>Contact Us</h1>
                 <div className='flex h-[100%] items-center md:items-center  gap-x-2 px-5 lg:px-0 text-[rgba(0,0,0,0.6)]'>
                    <span className='md:w-[10%] lg:w-[20%]'><AiOutlineMail className='text-[1em] md:text-[2em] lg:text-[4em]'/></span>
                    <div className='flex-1'>
                        <p className='text-[12px] md:text-base font-medium'>Have a question?</p>
                        <p className='text-sm md:text-lg font-semibold'>ultinoresources@gmail.com</p>
                    </div>
                 </div>
                 <div className='flex h-[100%] items-center gap-x-2 md:items-center px-5 lg:px-0 text-[rgba(0,0,0,0.6)]'>
                    <span className='md:w-[10%] lg:w-[20%]'><VscCallIncoming className='text-[1em] lg:text-[4em] md:text-[2em] font-light'/></span>
                    <div className='flex-1'>
                        <p className='text-[12px] md:text-base font-medium'>Call Us</p>
                        <p className='text-sm md:text-lg font-semibold'>+2347038807926,+2348097240528</p>
                    </div>
                 </div>
                 <div className='flex h-[100%] items-center gap-x-2 md:items-center px-5 lg:px-0 text-[rgba(0,0,0,0.6)]'>
                    <span className='md:w-[10%] lg:w-[20%]'><SlLocationPin className='text-[1em] lg:text-[4em] md:text-[2em]'/></span>
                    <div className='flex-1'>
                        <p className='text-[12px] md:text-base font-medium'>Visit Us at:</p>
                        <p className='text-sm md:text-lg font-semibold'>3/5 Bishop Dimeari Street, GRA, Port Harcourt</p>
                    </div>
                 </div>
            </div>

            {/* CONTACT US FORM */}
            <div className='flex-1 flex flex-col lg:flex-row gap-y-3 md:gap-y-0'>
                <div className="side-title lg:w-[20%] h-[100%] lato flex flex-col gap-y-3">
                    <h1 className='text-[1.5em] font-semibold'>Write a message</h1>
                    <p className='text-sm font-normal text-[rgba(0,0,0,0.7)]'>We love to hear from you. Please complete the form and we will respond within 24 hours.</p>
                </div>
                <form 
                onSubmit={handleSubmit} 
                // action='https://formsubmit.co/rchukwu94@gmail.com'
                // method='POST'
                className='lg:flex-1'
                >
                    <div className='h-[100%] flex flex-col gap-y-5 lg:px-10 pb-10'>

                    <div className='grid gap-y-5 md:grid-cols-2 md:gap-x-3 '>
                        <TextInput field='text' name="fullname" label={'Full Name:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your name'} placeholder='Enter your full name' title='Enter your full name' ref={fullNameRef}/>
                        <TextInput field='email' name="email" label={'Email Address:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter your email address'} placeholder='Enter your email address' title='Enter your email address'  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" ref={EmailRef}/>
                    </div>

                    <div>
                    <TextInput field='text' name="subject" label={'Subject:'} InputStyle={'py-3 text-[1rem] px-2 w-[100%] block border-2 bg-white rounded-sm '} errorMessage={'please enter a subject title'} placeholder='Subject title' title='Enter a subject title' ref={SubjectRef}/>
                    </div>
                    {/* <input type="hidden" name="_template" value="box"></input> */}
                    {/* <input type="hidden" name="_captcha" value="false"></input> */}
                    {/* <input type="hidden" name="_next" value="http://localhost:5174/contact"></input> */}
                    <div>
                        <p className='font-semibold text-[1rem] capitalize mb-2 w-fit'>Message:</p>
                        <textarea name="message" id="" cols="30" rows="10" className='w-full border-2 p-2' placeholder='Leave a message....' required title='Please enter your message' ref={MessageRef}></textarea>
                        <span className='text-[12px] text-red-500 font-normal mt-2 capitalize hidden'>Please enter your message</span>
                        <ValidationError
                            prefix='Message'
                            field='message'
                            errors={state.errors}
                        />  
                    </div>
                    

                    <div>
                        <button 
                        type='submit' 
                        disabled={state.submitting} 
                        className='bg-primaryBlue px-7 py-2 md:py-4 md:text-[1.1rem] font-semibold text-white w-full md:w-fit'
                        >
                            Send Message
                        </button>
                    </div>

                    </div>
                </form>
            </div>
       </div>
       {/* { showDelivered && <div className='fixed top-0 right-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
          <div className='bg-white rounded-md flex flex-col justify-center items-center h-[200px] lg:w-[500px] w-[90%] md:w-[300px]'>
              <h2 className='md:font-extrabold font-semibold text-[20px] md:text-[25px] lg:text-[40px] uppercase text-primaryBlue'>Message Sent!!!</h2>
              <p className='capitalize text-sm font-medium'>Our team will get back to you shortly</p>
          </div>
       </div>} */}
    </div>
  )
}

export default ContactForm