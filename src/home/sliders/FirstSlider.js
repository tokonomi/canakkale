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
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={styles.mySwiper_mobile}
                >
                    <SwiperSlide>
                        <div style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`, height: '100%'}}>
                            Slider 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`, height: '100%'}}>
                            Slider 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`, height: '100%'}}>
                            Slider 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`, height: '100%'}}>
                            Slider 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`, height: '100%'}}>
                            Slider 1
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    )
}

export default FirstSlider;