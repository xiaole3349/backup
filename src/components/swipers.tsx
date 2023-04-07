import { Navigation, Autoplay } from 'swiper';
import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './css/swipers.scss'
import 'swiper/css'
import 'swiper/css/navigation'
let img1 = {
    backgroundColor: 'rgb(255, 160, 185)',
    //top: '-30em'  Adjust the position of the background image, which can be modified according to the actual situation
};
let img2 = {
    backgroundColor: 'rgb(255, 160, 185)'
}
let img3 = {
    backgroundColor: 'rgb(255, 160, 185)'
}
let swiper = {
    width: '100%',
    height: '102vh',

    backgroundColor: 'rgb(255, 160, 185)'
}//**Adaptive value, please do not modify unless special circumstances**
let nav = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}
export default () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 7000, disableOnInteraction: true }}
                navigation={nav}
                loop={true}
                slidesPerView={1}
                style={swiper}
            >
                <SwiperSlide style={img1}><img src="https://img.zcool.cn/community/01d0c960c0c4bf11013f4720a1b9cd.jpg@3000w_1l_0o_100sh.jpg" /></SwiperSlide>
                <SwiperSlide style={img2}><img src="https://img.zcool.cn/community/01597060c5a34911013eaf70adc473.jpg@1280w_1l_2o_100sh.jpg" /></SwiperSlide>
                <SwiperSlide style={img3}><img src="https://img.zcool.cn/community/01003a5a17852fa80121349076f95e.jpg@2o.jpg" /></SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="arrowl"><div className="squarel"></div></div>
                <div className="arrowr"><div className="squarer"></div></div>
                
            </Swiper>
        </div>
    );
};