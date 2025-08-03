import React,{useEffect} from 'react'
import { useState, useRef } from 'react'
import { useGlobal } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

const HeaderNav = ({page}) => {
  const {isChecked, handleIsChecked} = useGlobal()

  const navLinks = [
    {
      tag:'Home',
      location:'/'
    },
    {
      tag:'Contact Us',
      location:'/contact'
    },
    {
      tag:'About Us',
      location:'/about'
    },
    {
      tag:'Services',
      location:'/services'
    },
  ]


  return (
    <header aria-label="Site Header" className="bg-white border">
  <div
    className="mx-auto containers flex h-16 max-w-screen-xly justify-between items-center gap-10 xl:gap-[200px] px-4y sm:px-6y lg:px-8y"
  >
    <Link  to={'/'} className="block " >
      <span className="sr-only">Home</span>
      <h1 className='font-bold uppercase text-lg'>Ultino <span className='text-[#7a5103]'>Resources</span></h1>
    </Link>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Site Nav" className="hidden lg:block">
        <ul className="flex items-center gap-6 text-sm link-container" >
          {
            navLinks.map((navLink,i) => (
              <li key={i + 328993}>
              <Link to={navLink.location} className={`text-[#0b2545] font-medium transition py-2 px-3 link ${page === navLink.tag ? 'actives' : null}`}>
                {navLink.tag}
              </Link>
            </li>
            ))
          }

        </ul>
      </nav>

      <div className="flex items-center md:justify-end gap-4 md:w-full lg:w-fit">
        <div className="hidden sm:flex sm:gap-4">
          <Link to={'/getaquote'}
            className="block rounded-md lg:rounded-3xl bg-[#0b2545] px-5 py-2.5 text-sm  text-white transition hover:bg-[#062a55]"
            href="/"
          >
            Get A Quote
          </Link>

        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden border"
        >
          <span className="sr-only">Toggle menu</span>
          <label htmlFor="check">
                <input type="checkbox" id="check" checked={isChecked} onChange={handleIsChecked}/> 
                <span></span>
                <span></span>
                <span></span>
            </label>
        </button>
      </div>
    </div>
  </div>
</header>

  )
}

export default HeaderNav