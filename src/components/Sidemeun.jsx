import React from 'react'
import { useGlobal} from '../context/GlobalContext'
import { motion ,AnimatePresence} from 'framer-motion'
import { useState,useEffect } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Sidemeun = () => {
    const meunItemStyle = 'menu-item  no-underline text-[#033f63] text-[0.65em] font-semibold tracking-widest relative block w-full '
    const menuListStyle = 'menu-list flex items-center'
    
    const linkData = [
      {
        name:'HOME',
        link:'/'
      },
      {
        name:'ABOUT US',
        link:'/about'
      },
      {
        name:'SERVICES',
        link:'/services'
      },
      // {
      //   name:'PROJECT',
      //   link:'/project'
      // },
      {
        name:'CONTACT US',
        link:'/contact'
      },
    ]

    const {isChecked,handleIsChecked} = useGlobal()
    const [position, setPosition] = useState(false)
    const handleScroll = (event) => {
       let distance = event.natiiveEvent.target.childNodes[0].offsetTop
      //  console.log(distance);

    }
    // console.log(isChecked);
    const divref = useRef()
    // console.log(divref.current.offsetTop);
    useEffect(() => {
      // divref.current.offsetTop
      const handleScroll = event => {
        // console.log('window.scrollY', window.pageYOffset);
        if(window.pageYOffset > 5){
          setPosition(true)
        } else {
          setPosition(false)
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <AnimatePresence>
    { isChecked &&
   <motion.div 
   className={`fixed top-16 left-0 h-[100vh] bg-transparent w-full z-50 ${position && 'hidden'}`}
   
   >

   <div 
   className={`bg-[rgba(0,0,0,0.1)] w-full  sticky bottom-0 z-[10000000000]`}
   >
        <motion.ul 
        className="menuList-container flex flex-col   gap-y-8 fixed bg-white top-16 py-5 px-5 h-fit border-b w-full"
        initial = {{opacity: 0, x:50}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.3}}
        // exit={{ x:-50}}
        key={position}
        >
        {
          linkData.map((datum,i)=>(
            <li className={menuListStyle} key={i + 2309813}>
              <Link to={datum.link} className={meunItemStyle} onClick={handleIsChecked}>
                {datum.name}
              </Link>
            </li>
          ))
        }
       </motion.ul>
    </div>
   <div className={`bg-[rgba(0,0,0,0.5)]  h-[100vh] w-full `} onClick={handleIsChecked}>
   </div>  
   </motion.div>}
    </AnimatePresence>

  )
}

export default Sidemeun