import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swipz.css";

// import required modules
import { Autoplay,Pagination,EffectFade } from "swiper";
import ServiceCard from "./ServiceCard";

export default function SwiperService({data}) {
  const [size, setSize] = useState(1)
   useEffect(()=>{
    const handleResize = () => {
      if(screen.width < 475){
        setSize(1)
     } else if( screen.width < 1024){
       setSize(2)
     } else {
      setSize(3)
     }
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    // return () => window.removeEventListener('resize', handleResize)
      
   },[size])
  return (
    <>
      <Swiper
        slidesPerView={size}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
        }}
        // effect={"fade"}
        pagination={{
          clickable: true,
          enabled:false
        }}
        modules={[Autoplay,Pagination, EffectFade]}
        className="mySwiper"
      >
         {
       data.map((datum, index) => (
        <SwiperSlide key={index + 234} >
            <ServiceCard datum={datum}/>
        </SwiperSlide>
    ))
        }
      </Swiper>
    </>
  );
}