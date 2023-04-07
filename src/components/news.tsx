import { Navigation } from 'swiper';
import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImage } from "gatsby-plugin-image"
import './css/news.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import Essay from './essay';
import { Link } from "gatsby";

function Swipers() {
    let swiper = {
        width: '100%',
        height: '79%'
    }
    let nav = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'my-button-disabled',

    }
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation={nav}
            style={swiper}
            id="swiper-phone"
        >
            <SwiperSlide><Essay /><div className="swiper-text"><h3><Link to="/">心元视觉</Link></h3><p><Link to="/">心元视觉围绕核心技术，构建了虚拟直播工具研发、3D影视表现技术开发、动漫游戏IP开发、动漫游戏研运等一整套业务体系，致力于用人工智能等高精尖技术将虚拟娱乐的美好传递给更多的人。</Link></p><i className="readme"><Link to="/">ReadMore&nbsp;&gt;&gt;</Link></i><div className="essay-img"><StaticImage src='../images/placeholder.png' alt='placeholder' className='img' /></div></div></SwiperSlide>
            <SwiperSlide><Essay /><div className="swiper-text"><h3>心元视觉</h3><p>心元视觉围绕核心技术，构建了虚拟直播工具研发、3D影视表现技术开发、动漫游戏IP开发、动漫游戏研运等一整套业务体系，致力于用人工智能等高精尖技术将虚拟娱乐的美好传递给更多的人。</p><i className="readme">ReadMore&nbsp;&gt;&gt;</i><div className="essay-img"><StaticImage src='../images/placeholder.png' alt='placeholder' className='img' /></div></div></SwiperSlide>
            <div className="swiper-button-prev ss" id="swiper-button-prev"></div>
            <div className="swiper-button-next ss" id="swiper-button-next"></div>
        </Swiper>
    );
}
export default Swipers;