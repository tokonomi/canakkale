import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./slider.module.css";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const FirstSlider = () => {
    const slider = [
        {
            title: 'Slider 1'
        },
        {
            title: 'Slider 2'
        },
        {
            title: 'Slider 3'
        },
        {
            title: 'Slider 4'
        },
        {
            title: 'Slider 5'
        },
        {
            title: 'Slider 6'
        }
    ]
    let desktop_slider = []
    for(let i = 0; i < slider.length; i++) {
        let arr = [];
        arr.push(slider[i], slider[i+1])
        i += 1
        desktop_slider.push(arr);
    }
    return(
            <>
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
                        {
                            slider.map((item, id) => {
                                return(
                                    <SwiperSlide key={id}>
                                        <div style={{backgroundColor: `rgb(${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)})`, height: '100%'}}>
                                            {item.title}
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div className={styles.slider_two_desktop}>
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
                        {
                            desktop_slider.map((item, id) => {
                                return(
                                    <SwiperSlide className={styles.desktop_inner_block} key={id}>
                                        {
                                            item.map((item2, id2) => {
                                                return(
                                                    <div key={id2} style={{backgroundColor: `rgb(${Math.floor(Math.random() * 251)}, ${Math.floor(Math.random() * 251)}, ${Math.floor(Math.random() * 251)})`, height: '100%', width: '49.95%'}}>
                                                        {item2.title}
                                                    </div>
                                                )
                                            })
                                        }   
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </>
    )
}

export default FirstSlider;