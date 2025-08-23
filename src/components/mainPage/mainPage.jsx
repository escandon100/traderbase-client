import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import {  EffectFade ,Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./mainPage.scss"



const MainPage = () => {

    return (
        <div className="mainPage">
            <Swiper
                modules={[EffectFade , Pagination, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true} 
                speed={3000}
            >
            <SwiperSlide>
                <div className=" slide slide1">
                    <div className="slideText">
                        <h1>Regulated Mining Platform | Forex Broker Options</h1>
                        <h3>BY THE MFSA OVER 7 YEARS</h3>
                        <h1>Start trading wih a reliable Mining broker !</h1>
                        <div className="images">
                            <img src="regulation-ns.png" alt="" />
                            <img src="regulation-eu.png" alt="" />
                        </div>
                        <Link to="/userRegister" className="button">Join Now</Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide slide2">
                    <div className="slideText">
                        <h1>Trade Mining | Forex anytime , anywhere</h1>
                        <h3>MORE THAN 100 ASSETS AVAILABLE FOR TRADING</h3>
                       <Link to="/userRegister" className="button">Join Now</Link>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide slide3">
                    <div className="slideText">
                        <h1>Smart investments start with a strong foundation</h1>
                        <h3>LEARN THE ROPES WITH OUR TEAM OF FINANCIAL EXPERTS</h3>
                        <h1>Live webinars , video tutorials , ebooks and professional tools</h1>
                        <Link to="/userRegister" className="button">Join Now</Link>
                   </div> 
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    )



}


export default MainPage