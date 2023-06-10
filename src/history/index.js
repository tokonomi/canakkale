import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./history.module.css"
import styles_p from "../portfolio/protfolio.module.css"

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
import { useDispatch } from "react-redux";

const History = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "STOP_INTERVAL"})
    }, [])
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
    return (
        <div>
            <div className={styles.history_header}>
                <h1>TARIXCE</h1>
            </div>
            <div className={`${styles.history_body} container`}>
                <div className={styles.history_title}>
                    <div className={styles.title_text}>
                        <h2>«Харківський плитковий завод» - історія становлення легендарного підприємства</h2>
                        <p>
                            За 70 років роботи легендарний ХПЗ зумів перетворитися з великовагового індустріального гіганта в сучасну технологічну компанію світового класу.
                        </p>
                    </div>
                    <div className={styles.history_title_image}></div>
                </div>
                <div className={styles.history_progression}>
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Mousewheel, Pagination]}
                        className={styles.mySwiper}
                    >
                        <SwiperSlide>
                            <div className={styles.progression_inner}>
                                <h3>1945</h3>
                                <div className={styles.inner_item}>
                                    <p>Саме цей рік вважається офіційною датою створення ХПЗ. Адже 1946 році неймовірними зусиллями харків'ян завод було піднято з руїн, добудовано і введено в експлуатацію.</p>
                                    <img src="https://goldentile.com.ua/assets/cache/images/84341ca3e117fd983c7b2761501226e6.jpg" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h3>1945</h3>
                                <div className={styles.inner_item}>
                                    <p>Саме цей рік вважається офіційною датою створення ХПЗ. Адже 1946 році неймовірними зусиллями харків'ян завод було піднято з руїн, добудовано і введено в експлуатацію.</p>
                                    <img src="https://goldentile.com.ua/assets/cache/images/84341ca3e117fd983c7b2761501226e6.jpg" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h3>1945</h3>
                                <div className={styles.inner_item}>
                                    <p>Саме цей рік вважається офіційною датою створення ХПЗ. Адже 1946 році неймовірними зусиллями харків'ян завод було піднято з руїн, добудовано і введено в експлуатацію.</p>
                                    <img src="https://goldentile.com.ua/assets/cache/images/84341ca3e117fd983c7b2761501226e6.jpg" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.history_nowaday}>
                    <h4>Сегодня керамическая группа Golden Tile – это вертикально интегрированная группа компаний, обеспечивающая полный цикл производства и дистрибуции керамической плитки</h4>
                    <div className={styles.history_adv_list}>
                        <p>В структуру Golden Tile Ceramic Group входят предприятия, обеспечивающие полный цикл производства керамической плитки и керамогранита:</p>
                        <ul>
                            <li>ТОВ "ГОЛДЕН ТАЙЛ" (м.Київ) - керуюча компанія і офіційний дистриб'ютор керамічної групи. До складу компанії входить власна дизайн-студія, яка розробляє трендові колекції для українського і глобального ринку. Крім того, "ГОЛДЕН ТАЙЛ" займається маркетингом і логістикою, координуючи і керуючи регіональними дистрибуційними центрами по всьому світу</li>
                            <li>ТОВ "ГОЛДЕН ТАЙЛ" (м.Київ) - керуюча компанія і офіційний дистриб'ютор керамічної групи. До складу компанії входить власна дизайн-студія, яка розробляє трендові колекції для українського і глобального ринку. Крім того, "ГОЛДЕН ТАЙЛ" займається маркетингом і логістикою, координуючи і керуючи регіональними дистрибуційними центрами по всьому світу</li>
                            <li>ТОВ "ГОЛДЕН ТАЙЛ" (м.Київ) - керуюча компанія і офіційний дистриб'ютор керамічної групи. До складу компанії входить власна дизайн-студія, яка розробляє трендові колекції для українського і глобального ринку. Крім того, "ГОЛДЕН ТАЙЛ" займається маркетингом і логістикою, координуючи і керуючи регіональними дистрибуційними центрами по всьому світу</li>
                            <li>ТОВ "ГОЛДЕН ТАЙЛ" (м.Київ) - керуюча компанія і офіційний дистриб'ютор керамічної групи. До складу компанії входить власна дизайн-студія, яка розробляє трендові колекції для українського і глобального ринку. Крім того, "ГОЛДЕН ТАЙЛ" займається маркетингом і логістикою, координуючи і керуючи регіональними дистрибуційними центрами по всьому світу</li>
                            <li>ТОВ "ГОЛДЕН ТАЙЛ" (м.Київ) - керуюча компанія і офіційний дистриб'ютор керамічної групи. До складу компанії входить власна дизайн-студія, яка розробляє трендові колекції для українського і глобального ринку. Крім того, "ГОЛДЕН ТАЙЛ" займається маркетингом і логістикою, координуючи і керуючи регіональними дистрибуційними центрами по всьому світу</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.partners}>
                    <h3>Bizim Partnoyral</h3>
                    <div className={styles_p.partners_blocks}>
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
                                        className={styles_p.mySwiper}
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
                </div>
            </div>
        </div>
    )
}

export default History;