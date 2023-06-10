import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
  
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./slider.module.css";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";

const FirstSlider = () => {
    let [sliderImg, setImgSlider] = useState([])
    let [loaded, setLoaded] = useState(false)
    useEffect(() => {
        async function getImages(){
            try{
                const response = await axios.get('http://localhost:5500/api/folder-data/Slider')
                setImgSlider(response.data)
                setTimeout(() => {setLoaded(true)}, 5000)
            }catch(err){
                console.log(err)
            }
        }

        getImages()
    }, [])
    let desktop_slider = []
    for(let i = 0; i < sliderImg.length; i++) {
        let arr = [];
        arr.push(sliderImg[i], sliderImg[i+1])
        i += 1
        desktop_slider.push(arr);
    }
    if(!loaded){
        return <div>Loading...</div>
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
                            sliderImg.map((item, id) => {
                                return(
                                    <SwiperSlide key={id}>
                                        <div style={{ backgroundImage: `url("http://localhost:5500/api/image-data/Slider/${item}") `, height: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "100%"}}>
                                            asd
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
                                                    <div key={id2} style={{ backgroundImage: `url("http://localhost:5500/api/image-data/Slider/${item2}") `, height: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%', width: '49.95%'}}>
                                                        {item2}
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