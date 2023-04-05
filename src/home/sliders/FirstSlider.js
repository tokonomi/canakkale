import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./slider.module.css";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const FirstSlider = () => {
    return(
            <div id="to_top" className={styles.slider_one}>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    pagination={false}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 1</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 2</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 3</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 4</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 5</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 6</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 7</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 8</SwiperSlide>
                    <SwiperSlide style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`}}>Slide 9</SwiperSlide>
                </Swiper>
            </div>
    )
}

export default FirstSlider;