import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Pagination,Navigation ,Autoplay} from "swiper";
import CarouselCard from "./CarouselCard";
// images
import image1 from '../assets/HeroImg1.jpg'
import image2 from '../assets/HeroImg2.jpg'
import {data} from '../data/HomeData'

export default function Carousel() {
  
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            data.map((datum, index)=>{
                return (
                    <SwiperSlide key={index + 3000}>
                        <CarouselCard datum={datum}/>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}
