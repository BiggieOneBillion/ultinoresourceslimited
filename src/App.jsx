import { useState } from 'react'
import {Banner,HeaderNav,Sidemeun,Footer} from './components/Index'
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import GetAQuote from './Pages/GetAQuote'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Projects from './Pages/Projects'
import {useGlobal} from './context/GlobalContext'
import MessageSuccess from './Pages/MessageSuccess'


function App() {
  const {hash,pathname,key} = useLocation()
  const {allow} = useGlobal()
  const protectedRoute = ({children}) => {
   return  allow === true ? (children) : <Navigate to={'/'} />
  }

  useEffect(()=>{
   if(hash === ''){
    window.scrollTo(0,0)
   } else {
    setTimeout(() => {
      const id = hash.replace('#','');
      const element = document.getElementById(id);
      if (element){
        element.scrollIntoView();
      }
    }, 0);
   }
  },[pathname,hash,key])
  
  return (
    <div className="App">
     <Banner/>
     <Sidemeun />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<AboutUs />} />
       <Route path='/services' element={<Services />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/getaquote' element={<GetAQuote/>} />
       <Route path='/success' 
       element={
         <MessageSuccess/>
        } />
        {/* <Route path='/projects' element={<Projects/>} /> */}
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
