import React from 'react'
import "../hero/hero.css"
import hero1 from "../assets/hero.jpg"
import hero11 from "../assets/hero.png"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper";
// import required modules
import { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
export default function Hero() {
    return (
        <div className='hero__container'>
            {/*/ /*/}
            <Swiper
                direction={"vertical"}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                mousewheel={true}
                modules={[Mousewheel, EffectCreative]}
                className="mySwiper"
            >
                <SwiperSlide className='slide'>
                    <img src={hero1} alt="a blonde  girl is walking " className='hero__img' />

                    <h3 className='h3'>Step Inside There's so much to see</h3>
                </SwiperSlide >

                <SwiperSlide className='slide'>
                    <img src={hero2} alt="a blonde  girl is walking " className='hero__img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={hero3} alt="a blonde  girl is walking " className='hero__img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={hero4} alt="a blonde  girl is walking " className='hero__img' />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
