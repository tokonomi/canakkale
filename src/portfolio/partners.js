import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styles from "./protfolio.module.css";
import support_ico from "../assets/icons/support.svg" 

import _1 from "../assets/portfolio/partners/1.jfif"
import _2 from "../assets/portfolio/partners/2.png"
import _3 from "../assets/portfolio/partners/3.jfif"
import _4 from "../assets/portfolio/partners/4.png"
import _5 from "../assets/portfolio/partners/5.png"
import _6 from "../assets/portfolio/partners/6.webp"
import _7 from "../assets/portfolio/partners/7.jpg"
import _8 from "../assets/portfolio/partners/8.png"
import _9 from "../assets/portfolio/partners/9.jpg"
import _10 from "../assets/portfolio/partners/10.png"
import _11 from "../assets/portfolio/partners/11.png"
import _12 from "../assets/portfolio/partners/12.webp"
import _13 from "../assets/portfolio/partners/13.png"
import _14 from "../assets/portfolio/partners/14.webp"
import _15 from "../assets/portfolio/partners/15.png"
import _16 from "../assets/portfolio/partners/16.png"

const Partners = () => {
    const partners = [
        {
            img: _1
        },
        {
            img: _2
        },
        {
            img: _3
        },
        {
            img: _4
        },
        {
            img: _5
        },
        {
            img: _6
        },
        {
            img: _7
        },
        {
            img: _8
        },
        {
            img: _9
        },
        {
            img: _10
        },
        {
            img: _11
        },
        {
            img: _12
        },
        {
            img: _13
        },
        {
            img: _14
        },
        {
            img: _15
        },
        {
            img: _16
        },
    ]
    let converted_partners = []
    for(let i = 0; i < partners.length; i++){
        let obj = []
        obj.push(partners[i], partners[i+1])
        i++
        converted_partners.push(obj)
    }
    return(
        <>
            <div className={`${styles.partners} container`}>
                <section>
                    <h3>Partnyorlar</h3>
                    <div className={styles.partners_header}>
                        <div className={styles.partners_header_img}></div>
                        <p className={styles.partners_header_text}>Uzun illərdir özəl və dövlət sektorlarından olan müxtəlif sifarişçilərin hər növ layihələrinin material tədarükçüsü kimi daim müraciət edəcəyi ünvan olaraq fəaliyyət göstərməyə.Məhsullarımızın istifadə olunduğu yerlərin içərisinə yaşayış binaları, inzibati binalar, iaşə obyektləri, ticarət obyektləri, dəmir yolu vağzalları, hava limanları, supermarketlər və s. daxildir.</p>
                    </div>
                </section>
            
                <section>
                    <h3>Bizim Partnoyral</h3>
                    <div className={styles.partners_blocks}>
                        {
                            converted_partners.map((el, i) => {
                                return(
                                    <Swiper
                                        key={i}
                                        effect={"flip"}
                                        allowTouchMove={false}
                                        grabCursor={false}
                                        autoplay={{
                                        delay: Math.floor(Math.random() * 7000) + 3000,
                                        disableOnInteraction: false,
                                        }}
                                        loop={false}
                                        pagination={false}
                                        navigation={false}
                                        modules={[Autoplay, EffectFlip, Pagination, Navigation]}
                                        className={styles.mySwiper}
                                    >
                                        {
                                            el.map((el2, i2) => {               
                                                return(
                                                    <SwiperSlide>
                                                        <div style={{backgroundImage: `url(${el2.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain', height: '100%'}}></div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default Partners;